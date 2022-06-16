import React,{useEffect,useState} from 'react'

function User() {
 let [loading,setLoading] = useState(true)
 let [user,setUser] = useState("")

 useEffect(function fn(){
   (async function(){
       let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
       let data = await response.json()
       console.log(data)
    // setUser(JSON.stringify(data))
       setUser(data.name)
       setLoading(false)
   })()
 },[])
  return (
    <>
    <h1>USER</h1>
    {
        loading == true ? <div>Loading...</div>:<h2>{user}</h2>
    }
    </>
    
  )
}

export default User