## first solve with "useState" then "useReducer" then "Reducer"
------------------
### steps :
##### 1- counterBallWithUseState
##### 2- counterBallWithUseReducer
##### 3- sellBuyBatUseState
##### 4- sellBuyBatUseReducer
##### 5-
##### 6-
##### 7-

----------------------------------------
---------------------------------------
---------------------------------------

## compair between "useState" & "useReducer" Hooks

### useState :

      const [state,setState] = useState("initialState")
-----------------------

      import React,{useState} from 'react'

      function Ball() {
        const [balls,setBalls] = useState(10)

        let  increment = ()=>{
                setCounter(balls + 1)
         }

        let  decrement = ()=>{
            if(balls>0)
                setCounter(balls -1)
        }

        return (
        
            <>
            <h1>balls</h1>
            <h1>no of balls:{balls}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            </>
        )
        }

        export default Ball



### useReducer :
   
     const [state, dispatch] = useReducer(reducer, initialState);


- (reducer, initialState) :

     - initialState => balls:10
    
    - useReducer , "initial state" ke sath sath "reducer function" bhi leta hai.
    - reducer() function as a parameter "state", "action" leta hai.
      
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

    

- [state, dispatch] :
   
   - increment , decrement => enn dono k liye useReducer ek common function dega "dispatch()" nam se.
   - dispatch me value pass karte hai with the help of "payload"
        
          <input type={'number'}  value={state.value} 
            onChange={(e)=>{
                let typeValue = e.target.value; 
                dispatch({ type:'set_value' , payload:typeValue }) // dispatch me value pass kiye with the help of "payload"
                }}   
           />

       -----------------            


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


- eg => 

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
