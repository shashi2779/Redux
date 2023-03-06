import React,{useReducer} from 'react'
 
let initialState = {  // initialState as a "obj" hota hai
    bat:10,
    value:''  //[ tosell ko as a "value" liye h ]💨 ya jo "value" Input me type kar rhe -> default value Input ki 💨 " "  hai. 
}             // compair with sellBuyBatUseState


function reducer(state,action){    // dispatch se as a obj "action" pass karte hai "reducer" ko
    switch(action.type){          //  action (1) type (2) payload => se dispatch me "value" pass karte hai
        case 'sell_bat':
            if(state.bat - state.value <0){  // handle krr rha ki buy karne prr -ve me na jaye 
                return {
                    ...state,                // state me initialState pass hua h
                    value:''
                }
            }
            //main part return hai
            return{
                bat:state.bat - state.value,
                value:''                      // input me jo value type kiye h as a "tosell" usseee-> , input se hataye h 
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
                value:action.payload     // dispatch se as a obj "action" pass karte hai 
            }                           //  action (1) type (2) payload => se dispatch me "value" pass karte hai.
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
        onChange={(e)=>{
            let typeValue = e.target.value; 
            //dispatch("action" as obj leta hai), action =>(1)type , (2)payload
            dispatch({ type:'set_value' , payload:typeValue }) // dispatch me value pass kiye with the help of "payload"
        }}                                                    // payload se data pass krr rhe h , matlab action form ho rha 
     />
     <button onClick={()=>{dispatch({type:'sell_bat'})}}>sell</button>
     <button onClick={()=>{dispatch({type:'buy_bat'})}}>buy</button>
    </>
  )
}

export default Bat