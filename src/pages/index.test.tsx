import '@testing-library/jest-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import HomePage from '../pages/index'
import VALIDATE_ERROR_MASTER from '@/constants/masters/validateErrorMaster.json'

const getTagInputElement = (container: HTMLElement) => {
  return container!.getElementsByTagName('input')[0]
}

describe('Home', () => {
  afterEach(() => {
    cleanup()
  })
  
  // -------------------- ENTER --------------------
  // -------------------- ENTER --------------------
  // -------------------- ENTER --------------------
  // -------------------- ENTER --------------------
  // -------------------- ENTER --------------------
  // -------------------- input allow --------------------
  it('TC_ENTER_01 - positive - zero :: 0', () => {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '0' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText('0')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ENTER_02 - positive - string :: tag 1', () => {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    for (const item of 'tag 1'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }
  })
  it('TC_ENTER_03 - positive - string start with empty trim out :: " tag1"', () => {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: ' tag 1' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText(' tag 1'.trim())
    expect(tags).toBeInTheDocument()
  })
  it('TC_ENTER_04 - negative - string end with empty :: "tag1, "', () => {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, ' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const errorMessage = screen.getByText(VALIDATE_ERROR_MASTER.INVALID_TAG_IS_EMPTY)
    expect(errorMessage).toBeInTheDocument()
  })
  it('TC_ENTER_05 - positive - Positive integer :: 1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '1' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText('1')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ENTER_06 - positive - Negative integer :: -1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '-1' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText('-1')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ENTER_07 - positive - Positive decimal :: 1.1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '1.1' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText('1.1')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ENTER_08 - positive - Negative decimal :: -1.1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '-1.1' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText('-1.1')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ENTER_09 - positive - boolean :: true', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'true' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText('true')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ENTER_10 - positive - boolean :: false', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'false' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText('false')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ENTER_11 - positive - null :: null', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'null' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText('null')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ENTER_12 - positive - undefined :: undefined', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'undefined' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const tags = screen.getByText('undefined')
    expect(tags).toBeInTheDocument()
  })

  // -------------------- functional --------------------
  it('TC_ENTER_13 - positive - multiple tags :: tag 1, tag 2', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 2' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    for (const item of 'tag 1, tag 2'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }
  })
  it('TC_ENTER_14 - positive - 10 tags without max', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    for (const item of 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }
  })
  it('TC_ENTER_15 - positive - 10 tags with max=10', () =>  {
    const { container } = render(<HomePage max={10} />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    for (const item of 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }
  })
  it('TC_ENTER_16 - negative - 11 tags with max=10', () =>  {
    const { container } = render(<HomePage max={10} />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10, tag 11' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const errorMessage = screen.getByText(VALIDATE_ERROR_MASTER.INVALID_TAG_LIMIT.replace('{{max}}', '10'))
    expect(errorMessage).toBeInTheDocument()
  })
  it('TC_ENTER_17 - negative - duplicate like: tag 1, tag 1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 1' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const errorMessage = screen.getByText(VALIDATE_ERROR_MASTER.INVALID_TAG_DUPLICATE)
    expect(errorMessage).toBeInTheDocument()
  })
  it('TC_ENTER_18 - negative - existing input 2 times, first like: tag 1 then secound like: tag 1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    for (const item of 'tag 1'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }

    fireEvent.change(inputElement, { target: { value: 'tag 1' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })
    const errorMessage = screen.getByText(VALIDATE_ERROR_MASTER.INVALID_TAG_IS_EXISTING)
    expect(errorMessage).toBeInTheDocument()
  })

  // -------------------- onBlur --------------------
  // -------------------- onBlur --------------------
  // -------------------- onBlur --------------------
  // -------------------- onBlur --------------------
  // -------------------- onBlur --------------------
  // -------------------- onBlur --------------------
  // -------------------- input allow --------------------
  it('TC_ONBLUR_01 - positive - zero :: 0', () => {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '0' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText('0')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ONBLUR_02 - positive - string :: tag 1', () => {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1' } })
    fireEvent.blur(inputElement)
    for (const item of 'tag 1'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }
  })
  it('TC_ONBLUR_03 - positive - string start with empty trim out :: " tag1"', () => {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: ' tag 1' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText(' tag 1'.trim())
    expect(tags).toBeInTheDocument()
  })
  it('TC_ONBLUR_04 - negative - string end with empty :: "tag1, "', () => {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, ' } })
    fireEvent.blur(inputElement)
    const errorMessage = screen.getByText(VALIDATE_ERROR_MASTER.INVALID_TAG_IS_EMPTY)
    expect(errorMessage).toBeInTheDocument()
  })
  it('TC_ONBLUR_05 - positive - Positive integer :: 1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '1' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText('1')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ONBLUR_06 - positive - Negative integer :: -1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '-1' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText('-1')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ONBLUR_07 - positive - Positive decimal :: 1.1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '1.1' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText('1.1')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ONBLUR_08 - positive - Negative decimal :: -1.1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: '-1.1' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText('-1.1')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ONBLUR_09 - positive - boolean :: true', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'true' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText('true')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ONBLUR_10 - positive - boolean :: false', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'false' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText('false')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ONBLUR_11 - positive - null :: null', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'null' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText('null')
    expect(tags).toBeInTheDocument()
  })
  it('TC_ONBLUR_12 - positive - undefined :: undefined', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'undefined' } })
    fireEvent.blur(inputElement)
    const tags = screen.getByText('undefined')
    expect(tags).toBeInTheDocument()
  })

  // -------------------- functional --------------------
  it('TC_ONBLUR_13 - positive - multiple tags :: tag 1, tag 2', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 2' } })
    fireEvent.blur(inputElement)
    for (const item of 'tag 1, tag 2'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }
  })
  it('TC_ONBLUR_14 - positive - 10 tags without max', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10' } })
    fireEvent.blur(inputElement)
    for (const item of 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }
  })
  it('TC_ONBLUR_15 - positive - 10 tags with max=10', () =>  {
    const { container } = render(<HomePage max={10} />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10' } })
    fireEvent.blur(inputElement)
    for (const item of 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }
  })
  it('TC_ONBLUR_16 - negative - 11 tags with max=10', () =>  {
    const { container } = render(<HomePage max={10} />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 2, tag 3, tag 4, tag 5, tag 6, tag 7, tag 8, tag 9, tag 10, tag 11' } })
    fireEvent.blur(inputElement)
    const errorMessage = screen.getByText(VALIDATE_ERROR_MASTER.INVALID_TAG_LIMIT.replace('{{max}}', '10'))
    expect(errorMessage).toBeInTheDocument()
  })
  it('TC_ONBLUR_17 - negative - duplicate like: tag 1, tag 1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1, tag 1' } })
    fireEvent.blur(inputElement)
    const errorMessage = screen.getByText(VALIDATE_ERROR_MASTER.INVALID_TAG_DUPLICATE)
    expect(errorMessage).toBeInTheDocument()
  })
  it('TC_ONBLUR_18 - negative - existing input 2 times, first like: tag 1 then secound like: tag 1', () =>  {
    const { container } = render(<HomePage />)
    const inputElement = getTagInputElement(container)

    fireEvent.change(inputElement, { target: { value: 'tag 1' } })
    fireEvent.blur(inputElement)
    for (const item of 'tag 1'.split(',')) {
      const tags = screen.getByText(item.trim())
      expect(tags).toBeInTheDocument()
    }

    fireEvent.change(inputElement, { target: { value: 'tag 1' } })
    fireEvent.blur(inputElement)
    const errorMessage = screen.getByText(VALIDATE_ERROR_MASTER.INVALID_TAG_IS_EXISTING)
    expect(errorMessage).toBeInTheDocument()
  })
})
