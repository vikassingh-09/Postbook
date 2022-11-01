import React from 'react'

const NewPost = (props) => {
    const {handleToggle}=props
  return (
    <div>
     <button onClick={handleToggle}>New Post</button>
    </div>
  )
}

export default NewPost
