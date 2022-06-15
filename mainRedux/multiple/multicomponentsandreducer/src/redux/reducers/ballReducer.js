
let initialState = {
    balls: 10
}

// when state is not passed -> initial state -> 10
function ballReducer(state = initialState, action) {
    switch (action.type) {
        case "increment":
            return {
                balls: state.balls + 1
            };
            break;
        case "decrement":
            if(state.balls>0)
              return {
                balls: state.balls - 1
              };
              break;
        default:
            return state;
    }
}

export default ballReducer;
