import React,{useState} from 'react'

function Bat() {
   const [bat,setbat] = useState(10)
   const [toSell,setToChangeBat] = useState("")

   let sellBat = () =>{
             setbat(bat-toSell)
             setToChangeBat('') // input se value hta rhe jo seen hoti h , input ka kam hone k bad bhi (with help of input value)
   }

   let buyBat = () =>{
        setbat(bat+Number(toSell))
        setToChangeBat('')
   }

  return (
    <>
    <h1>Bat</h1>
     <h1>no of bats:{bat}</h1>
     <input type={'number'} value={toSell} onChange={(e)=>{
        let value = e.target.value
        setToChangeBat(value)}}/>
     <button onClick={sellBat}>sell</button>
     <button onClick={buyBat}>buy</button>
    </>
  )
}

export default Bat