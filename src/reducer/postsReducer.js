const postsInitialState=[]
const postsReducer=(state=postsInitialState,action)=>{
 switch(action.type){

    case 'SET_POSTS':{
        return [...action.payload]
    }


    case 'ADD_POSTS': {
        return [...state , {...action.payload}]
    }

    case 'SEARCH_POSTS':{
        return state.filter((post)=>{
            return post.title.toLowerCase().includes(action.payload)
        })
    }


    default:{
    return [...state]
    }
 }
}
export default postsReducer