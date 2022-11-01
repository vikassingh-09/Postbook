import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { startSetPosts} from '../actions/postsAction'
import {useDispatch} from 'react-redux'



const PostForm = (props) => {
    const {handleToggle}=props
    const[id,setId]=useState(uuidv4())
    const[title,setTitle]=useState('')
    const[body , setBody]=useState('')
    const [formErrors , setFormErrors]=useState({})
    const errors={}

    const dispatch=useDispatch()

    const handleTitleChange=(e)=>{
      setTitle(e.target.value)
    }
    const handleBodyChange=(e)=>{
   setBody(e.target.value)
    }
    const runValidation=()=>{
        if(title.trim().length===0){
            errors.title='title cannot be blank'
        }
        if(body.trim().length===0){
            errors.body='body cannot be blank'
        }
    }

    const handleSubmit=(e)=>{
      e.preventDefault()

      runValidation()

      if(Object.keys(errors).length===0){
        setFormErrors({})
        const formData={
            id,
            title,
            body
        }
        const resetForm=()=>{
            setId(uuidv4())
            setTitle('')
            setBody('')
            }
            dispatch(startSetPosts(formData,resetForm))
       
          handleToggle()
      }else{
        setFormErrors(errors)
      }
 
    }
  return (
    <div>
    <h3>Post Form</h3>
    <form onSubmit={handleSubmit}>
         <input type='text' placeholder='TITLE' value={title} onChange={handleTitleChange}/>
         {formErrors.title && <span>{formErrors.title}</span> }
         <br/>
         <textarea value={body} placeholder='BODY' onChange={handleBodyChange}></textarea>
         {formErrors.body && <span>{formErrors.body}</span> }
         <br/>
         <input type='submit' value='PUBLISH'/>
         <button onClick={handleToggle}>Cancel</button>

    </form>
    </div>
  )
}

export default PostForm
