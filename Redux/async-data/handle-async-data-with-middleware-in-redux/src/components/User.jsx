import React from 'react'
import { useEffect } from 'react'
import { connect } from "react-redux";
import userFetchMiddleWare from '../redux/reducers/user/userMiddleWare';
function User(props) {
    console.log(props);
    useEffect(function fn() { // life-time m ek bar chalega
        props.fetchUser();   // esko dispatch call karega
    }, []);
    return (
        <>
            <h1>USER</h1>
            {props.loading == true ?
                <div>Loading</div> :
                // console.log(props)
                <h2>{props.users.name}</h2>

            }
        </>
    )
}
function mapStatetoProps(store) {
    return store.User;              // rootUser.js se User aaya h , toh "store.Ball" means store se Ball ka data access kiye  
}
function mapDispatchtoProps(dispatch) {
    return {
        fetchUser: () => {
            // function
            return dispatch(userFetchMiddleWare);    // ess dispatch se "fun/obj" kuchh bhi pass kare MiddleWare k pas jayega wha handle hoga phir wha se MiddleWare ka dispatch reducer k pass bhej dega
        }                                            // userFetchMiddleware fun middle ware hai async-data ko handle karne k liye
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(User);