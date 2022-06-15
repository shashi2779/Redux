import React from 'react'
import { connect } from "react-redux";


function Bat(props) {
    console.log();
    return (
        <>
            <h1>Bat</h1>
            <h2>No of Bat:{props.bat}</h2>
            <input type="number" value={props.value}
                onChange={(e) => {
                    let value = e.target.value;
                    props.setValue(value);
                }} />
            <button
                onClick={props.sellBat}
            >Sell</button>
            <button
                onClick={props.buyBat}
            >Buy</button>
        </>
    )
}


const mapStateToProps = (store) => {
    return store;
}


const mapDispatchtoProps = (dispatch) => {
    return {
        sellBat: () => {
            
            dispatch({ type: "sell_bat" })

        },
        buyBat: () => {
           
            dispatch({ type: "buy_bat" })

        },
        setValue: (value) => {
            dispatch({
                type: "set_value",
                payload: value
            })
        }
    }

}


export default connect(mapStateToProps,mapDispatchtoProps)(Bat);

// const connectdWIthpropsFns = connect(mapStateToProps, mapDispatchtoProps);
// const connectedWithBat = connectdWIthpropsFns(Bat);
// export default connectedWithBat;
