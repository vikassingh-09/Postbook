import React,{useState}from 'react'
import { startSearchPosts} from '../actions/postsAction'
import {useDispatch} from 'react-redux'

  const SearchPost = (props) => {
    const[term,setTerm]=useState('')
  const dispatch=useDispatch()
   const handleChange=(e)=>{
     setTerm(e.target.value)
     dispatch(startSearchPosts(e.target.value))   
    }
  return (
    <div>
      <input type='text' value={term} placeholder='search by title' onChange={handleChange}/>
    </div>
  )
}

export default SearchPost
