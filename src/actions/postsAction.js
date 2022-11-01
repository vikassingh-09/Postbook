export const  startGetPosts=()=>{
    return (dispatch)=>{
    const data=JSON.parse(localStorage.getItem('data'))
    dispatch(setPosts(data))
    }
}
export const setPosts=(data)=>{
   return {
      type:'SET_POSTS',
      payload: data
   }
}
export const startSetPosts=(data,resetForm)=>{
   
    return (dispatch)=>{
        localStorage.setItem('data',JSON.stringify(data))
         resetForm()
         dispatch(addPosts(data))

    }
    }
export const addPosts=(result)=>{
    return {
       type:'ADD_POSTS',
       payload:result
    }
    }

    export const  startSearchPosts=(data)=>{
        return (dispatch)=>{
        dispatch(searchPosts(data))
 
        }
    }
    export const searchPosts=(data)=>{
       return {
          type:'SEARCH_POSTS',
          payload:data
       }
    }