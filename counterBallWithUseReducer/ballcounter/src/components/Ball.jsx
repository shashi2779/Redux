import React,{useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return state+1;

        case 'decrement':
            return state-1; 
        
        default:
            console.log("wrong type") ;   
    }
}


function Ball() {
   //const [state, dispatch] = useReducer(reducer, initialState);
   const [state,dispatch] = useReducer(reducer,10)

  return (
    <>
    <h1>balls</h1>
    <h1>no of balls:{state}</h1>
    <button onClick={()=>{
        dispatch({type:'increment'})
    }}>+</button>
    <button onClick={()=>{
        dispatch({type:'decrement'})
    }}>-</button>
   </>
  )
}

export default Ball



