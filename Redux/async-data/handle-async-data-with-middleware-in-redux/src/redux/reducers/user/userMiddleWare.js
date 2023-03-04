// middleware fun banate hai "async-data" ko handle karne k liye
// dispatch mil jaata hai middleware ko
// ye middleware fun hi dispatch marega , ye dispatch bhej diya Reducer ko 
export default async function userFetchMiddleWare(dispatch) {
    let resp = await fetch("https://jsonplaceholder.typicode.com/users/1"); // fetch hua
   
    let users = await resp.json(); // data aya => jo "user data" aaya use dispatch me pass krr diya
    
    dispatch({                     // dispatch hua , abb ja ke check hoga reducer me
        type: "success_users",
        payload: users
    })
}