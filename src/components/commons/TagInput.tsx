import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import VALIDATE_ERROR_MASTER from '@/constants/masters/validateErrorMaster.json'

const COLOR_PALETTE = {
  default: {
    black: '#000000'
  }
}

const InputTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 4px;
  padding: 8px;
  border: 1px solid ${COLOR_PALETTE.default.black};

  height: 100%;
  overflow-y: scroll;

  .tag-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 2px;
    border: 1px solid ${COLOR_PALETTE.default.black};
  }
  .multiple-tag-label {
    /* border-right: 1px solid ${COLOR_PALETTE.default.black}; */
    padding: 0px 4px;
  }
  .multiple-tag-btn-close {
    padding: 0px 4px;
  }

  .input-container {
    border: 1px solid purple;
  }
  .input-text {
    /* height: 100%; */
    border: none;
    outline: none;
  }
`

const hasDuplicates = (arr: string[]) => {
  return new Set(arr).size !== arr.length
}

const validateInput = ({
  separator,
  tags,
  inputTag,
  max
}: {
  separator: string
  tags: string[]
  inputTag: string
  max?: number
}): string | undefined => {
  let errorMessage: string = ''
  if (inputTag?.trim()) {
    const input = String(inputTag).split(separator)

    const totalTags = tags.length + input.length
    if (!errorMessage) {
      if (max !== undefined && totalTags > max) {
        errorMessage = VALIDATE_ERROR_MASTER.INVALID_TAG_LIMIT.replace('{{max}}', String(max))
      }
    }

    if (!errorMessage) {
      if (hasDuplicates(input.map((item) => item.trim()))) {
        errorMessage = VALIDATE_ERROR_MASTER.INVALID_TAG_DUPLICATE
      }
    }

    for (const item of input) {
      const inputItem = item.trim()

      if (!errorMessage) {
        if (inputItem === '') {
          errorMessage = VALIDATE_ERROR_MASTER.INVALID_TAG_IS_EMPTY
          break
        }
      }

      if (!errorMessage) {
        const isExisting = tags.find((tag) => tag === inputItem)
        if (isExisting) {
          errorMessage = VALIDATE_ERROR_MASTER.INVALID_TAG_IS_EXISTING
          break
        }
      }
    }
  }

  if (errorMessage) return errorMessage
  return undefined
}

const TagInput = (props: {
  separator?: ',' | '|'
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
  max?: number
}) => {
  const separator = props.separator || ','
  const [inputTag, setInputTag] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [errorMessage, setErrorMessage] = useState('')

  const { tags, setTags } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTag(event.target.value)
  }

  const saveTags = () => {
    if (inputTag?.trim()) {
      const error = validateInput({ separator, tags, inputTag, max: props.max })
      if (!error) {
        setTags([
          ...tags,
          ...inputTag.split(separator).map((item) => item.trim())
        ])
        setInputTag('')
        setErrorMessage('')
      } else {
        // handle error ...
        console.log('error:', error)
        setErrorMessage(error)
      }
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // Prevent default form submission behavior (if inside a form)
    event.preventDefault()

    saveTags()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Prevent default form submission behavior (if inside a form)
      event.preventDefault()

      saveTags()
    }
  }

  const handleClose = (tagName: string) => {
    const index = tags.findIndex((value) => value === tagName)
    if (index !== -1) {
      const updatedTag = [...tags] // copy value
      updatedTag.splice(index, 1)
      setTags(updatedTag) // re assign
    }
  }

  return (
    <div>
      <InputTagContainer
        onClick={() => {
          inputRef.current?.focus()
        }}
      >
        {tags.map((tag, index) => {
          if (!tag) return null
          return (
            <div key={index} className="tag-container">
              <div className="multiple-tag-label">{tag}</div>
              <div
                className="multiple-tag-btn-close"
                onClick={() => {
                  handleClose(tag)
                }}
              >
                X
              </div>
            </div>
          )
        })}
        <div className="input-container">
          <input
            ref={inputRef}
            className="input-text"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            value={inputTag}
            placeholder={!tags ? 'Placeholder' : undefined}
          />
        </div>
      </InputTagContainer>
      <div>{errorMessage}</div>
    </div>
  )
}

export default TagInput
