// dispatch mil jaata hai 
export default async function userFetchMiddleWare(dispatch) {
    let resp = await fetch
        ("https://jsonplaceholder.typicode.com/users/1");     // search -> json placeholder -> user (link se user ka data mil jayega)
    let users = await resp.json();
    dispatch({
        type: "success_users",
        payload: users
    })
}