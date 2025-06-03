import React, { useState } from 'react'
import TagInput from '@/components/commons/TagInput'

const HomePage = (props: { tags?: string[] }) => {
  const [tags, setTags] = useState<string[]>(props?.tags || [])
  return (
    <>
      <div>Home</div>
      <div style={{ width: '200px' }}>
        <TagInput tags={tags} setTags={setTags} max={10} />
      </div>
    </>
  )
}

export default HomePage
