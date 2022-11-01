import React,{useState} from 'react'
import { useSelector } from 'react-redux'

const DisplayPosts = (props) => {
   // const[toggle,setToggle]=useState(false)
    const posts=useSelector((state)=>{
        return state.posts
    })
  /*   const handleToggle=()=>{
        setToggle(!toggle)
    } */

  return (
    <div>
  <button /* onClick={handleToggle} */>Published</button><br/>
  {
   /* toggle&& */ posts.map((ele)=>{
    return (
   <ul key={ele.id}>
    <li>{ele.title}</li>
    <li>{ele.body}</li>
   </ul>
           )
     }) 
  }
    </div>
  )
}

export default DisplayPosts
