## First solve with "useState" then "useReducer" then "Reducer"
------------------
### steps :
##### 1- counterBallWithUseState
##### 2- counterBallWithUseReducer
##### 3- sellBuyBatUseState
##### 4- sellBuyBatUseReducer
##### 5- In Redux -> reduxwithball
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




## In sellBuyBatUseReducer :

```js   
       //reducer function Hints :

        function reducer(state,action){  
               
                switch(action.type){
                      
                      case 'sell_bat':
                           break;
                       
                      case 'buy_bat':
                           break;
                          
                      case 'set_value':
                                             
                           break;                          
                }
        }


```

```js

       import React,{useReducer} from 'react'
        
        let initialState = {
            bat:10,
            value:''   // tosell ko as a "value" liye h 
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
                onChange={(e)=>{
                    let typeValue = e.target.value; 
                    dispatch({ type:'set_value' , payload:typeValue }) // dispatch me value pass kiye with the help of "payload"
                }}                                                    // payload se data pass krr rhe h , matlab action form ho rha 
            />
            <button onClick={()=>{dispatch({type:'sell_bat'})}}>sell</button>
            <button onClick={()=>{dispatch({type:'buy_bat'})}}>buy</button>
            </>
        )
        }

        export default Bat

```



## Redux :
#### npm i redux react-redux
- Reducer
- initialState
- dispatch
- action
- type
- payload
------  
##### Do you learn to Redux after doing these three things :
- state change
- user-Input
- some req / Db query  [async task k sath]
---------  

#### Reducer :
- It contains all the state manipulation logic.
  [state change karta hai]

#### initialState :
- your state , when your app initially renders.

#### dispatch :
- It is a function that is used to pass "action" object to reducer.

#### action :
- It is an object send by dispatch to reducer function.
- It contain two properties :
   
   -  type 
   -  payload : ( dispatch me "value" pass karte hai with the help of payload. )


### Redux => reduxwithball :
--------------
![](img/code1.png)
![](img/code.png)