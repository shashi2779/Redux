let initialState = {
    bat: 10,
    value: ""   // tosell ko as a "value" liye h...  [compair with In sellBuyBatUseState]
}

function batReducer(state = initialState, action) {
    switch (action.type) {
        case "sell_bat":
            if (state.bat - state.value < 0) {   // handle krr rha ki buy karne prr -ve me na jaye 
                return {
                    ...state,                      // state me initialState pass hua h  
                    value: ""
                }
            } else {
                return {
                    bat: state.bat - state.value,
                    value: ""                       // "input" me jo value type kiye h as a "tosell" usseee -> , input se hataye h    
                }
            }
        case "buy_bat":
            return {
                bat: state.bat + Number(state.value),
                value: ""   
            }
        case "set_value":
            return {
                bat: state.bat,
                value: action.payload   // dispatch se payload m value pass kiye h.... "action.payload" me value aayi
            }
        default:
            return state
    }
}
export default batReducer;