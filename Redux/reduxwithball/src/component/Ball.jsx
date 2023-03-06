import React from 'react'
// import connect fun
import { connect } from "react-redux";

function Ball(props) {
    console.log(props)
    return (<>
        <h1>Balls</h1>
        <h2>No of Balls:{props.balls}</h2>
        <button
            onClick={props.buyBall} 
        >+</button>
        <button
            onClick={props.sellBall}

        >-</button>
    </>
    )
}


// store as a props Ball component me pass hoga
// to get your state variable from redux store , (dispatch function bhi provide karta h) 
const mapStateToProps = (store) => {   // return state-variable as props
    return store;  // this fun return state...variable as a props in our Ball fun.
            
}



// Ball component me dispatch as a props pass hoga 
const mapDispatchtoProps = (dispatch) => {     
    return {                                   
        sellBall: () => {           //HINT ::=> sellBall:dispatch({})   -> [click karne prr call ho] ->  sellBall:()=>{dispatch({})} 
            dispatch({                     
                type: "decrement"
            })
        },
        buyBall: () => {
            dispatch({
                type: "increment"
            })
        }
    }
}


// to give access to the component to two things
//  first -> store  -> mapsstatetoprops
// second  -> dispatch -> mapdispatchtoprops

export default connect(mapStateToProps, mapDispatchtoProps)(Ball);

/*_________________OR_________________________*/


// const connectdWIthpropsFns = connect(mapStateToProps, mapDispatchtoProps)
// const connectedWithBall = connectdWIthpropsFns(Ball);
// export default connectedWithBall;
