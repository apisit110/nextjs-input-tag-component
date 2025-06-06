# Example Tag Input for React component

Here's an example of a reusable component for a multiple tag input field

![example](https://github.com/user-attachments/assets/6a7b241a-e588-4c74-a4ce-7144afa62b85)

## How to add tag

- Users can add tags by typing them and pressing **Enter**
- When the input loses focus **onBlur**

> **customizable separator** (default: comma)

## How to remove tags

Remove tags by clicking an "X" button next to each tag

## Validation & Condition

| message                              | description                                    |
| :----------------------------------- | :--------------------------------------------- |
| invalid must not exceed {{max}} tags | Limit the number of tags (if a maximum is set) |
| invalid tag is duplicate             | Handle duplicate tags gracefully               |
| invalid tag is empty                 | some input tag is empty                        |
| invalid tag is existing              | some input tag is existing in tags             |

## Usage

import TagInput from file, delcare react hook useState then call the component like this

```tsx
// src/pages/index.tsx
import React, { useState } from 'react'
import TagInput from '@/components/commons/TagInput'

const HomePage = (props: { tags?: string[], max?: number }) => {
  const [tags, setTags] = useState<string[]>(props?.tags || [])
  return (
    <>
      <div>Home</div>
      <div style={{ width: '200px' }}>
        <TagInput tags={tags} setTags={setTags} max={props.max} />
      </div>
    </>
  )
}

export default HomePage
```

## Props

Common props you may want to specify include:

- `separator` - (optional) - Custom splitter default = comma
- `tags` - state from react hook useState
- `setTags` - setStateAction from react hook useState
- `max` - (optional) - Limit the total number of tags that can be added

## Start

This example uses Node.js version 22. If you have nvm installed, you can switch to this version by running `nvm use` before starting the example

```bash
npm run dev
```

run test every time when commit or before merge to git

```bash
npm run test
```

## Docs

- https://nextjs.org/docs/pages/guides/testing/jest
- https://testing-library.com/docs/react-testing-library/intro/

