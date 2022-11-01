import React,{useState} from 'react'
import NewPost from './NewPost'
import PostForm from './PostForm'
import DisplayPosts from './DisplayPosts'
import SearchPost from './SearchPost'

const PostsContainer = (props) => {
    const [toggle , setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }

  return (
    <div>
        <SearchPost/><br/>

        {
        toggle?(<PostForm handleToggle={handleToggle}/>):(<NewPost handleToggle={handleToggle}/>)
        }
        <br/>
        <DisplayPosts />
      
    </div>
  )
}

export default PostsContainer
