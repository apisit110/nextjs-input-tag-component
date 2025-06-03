import React, { useState } from 'react'
import TagInput from '@/components/commons/TagInput'

const HomePage = (props: { tags?: string[], max?: number }) => {
  const [tags, setTags] = useState<string[]>(props?.tags || [])
  return (
    <>
      <div>Home</div>
      <div style={{ width: '350px' }}>
        <TagInput tags={tags} setTags={setTags} max={props.max} />
      </div>
    </>
  )
}

export default HomePage
