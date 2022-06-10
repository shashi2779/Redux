import React,{useState} from 'react'

function Ball() {
    const [counter,setCounter] = useState(10)

   let  increment = ()=>{
        setCounter(counter + 1)
    }

   let  decrement = ()=>{
       if(counter>0)
        setCounter(counter -1)
    }

  return (
   
    <>
    <h1>balls</h1>
     <h1>no of balls:{counter}</h1>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
    </>
  )
}

export default Ball