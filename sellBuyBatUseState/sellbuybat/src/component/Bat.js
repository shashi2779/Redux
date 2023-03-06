import React,{useState} from 'react'

function Bat() {
   const [bat,setbat] = useState(10) // by default bat ki value 10 h 
   const [toSell,setToChangeBat] = useState("")

   let sellBat = () =>{
             setbat(bat-toSell)
             setToChangeBat('') // input se value hta rhe jo seen hoti h , sell hone k bad bhi 
   }

   let buyBat = () =>{
        setbat(bat+Number(toSell))
        setToChangeBat('')     // input se value hta rhe jo seen hoti h , buy hone k bad bhi
   }

  return (
    <>
    <h1>Bat</h1>
     <h1>no of bats:{bat}</h1>
     <input type={'number'} value={toSell} onChange={(e)=>{
        let valuee = e.target.value
        setToChangeBat(valuee)}}/>
     <button onClick={sellBat}>sell</button>
     <button onClick={buyBat}>buy</button>
    </>
  )
}

export default Bat