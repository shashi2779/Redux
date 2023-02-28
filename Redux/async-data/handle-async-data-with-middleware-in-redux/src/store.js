// npm i redux react-redux

import { createStore ,applyMiddleware} from "redux";
// npm i redux-thunk
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";  //esse ballReducer,batReducer dono import huaa h from rootReducer.js
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;