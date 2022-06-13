import React,{useReducer} from 'react'
 
let initialState = {
    bat:10,
    value:''   // tosell as a "value" liye h 
}

function reducer(state,action){   // dispatch related to action , dispatch passes obj , in obj -> action form
    switch(action.type){
        case 'sell_bat':
            if(state.bat - state.value <0){  // handle krr rha ki buy karne prr -ve me na jaye 
                return {
                    ...state,                // state me initialState pass hua h
                    value:''
                }
            }
            return{
                bat:state.bat - state.value,
                value:''
            }
         break;
         
         case 'buy_bat':
            return{
                bat:state.bat + Number(state.value),
                value:''
            }
         break;

           case 'set_value':
            return{
                bat:state.bat,
                value:action.payload     // jo dispatch se object pass karte h use "action" bolte h 
            }                           //  dispatch se  [type='set_value'] & [payload] pass huaa h toh action se hi access karte h ..  i.e action.payload
         break;                          
    }
}


function Bat() {
   const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
    <h1>Bat</h1>
     <h1>no of bats:{state.bat}</h1> 
     <input type={'number'}  value={state.value} 
        onChange={(e)=>{let typeValue = e.target.value; 
            dispatch({ type:'set_value' , payload:typeValue })}}  // payload se data pass krr rhe h , action form ho rha 
        />
     <button onClick={()=>{dispatch({type:'sell_bat'})}}>sell</button>
     <button onClick={()=>{dispatch({type:'buy_bat'})}}>buy</button>
    </>
  )
}

export default Bat