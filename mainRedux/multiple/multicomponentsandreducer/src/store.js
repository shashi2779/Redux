// npm i redux react-redux

import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";  //esse ballReducer,batReducer dono import huaa h from rootReducer.js
const store = createStore(rootReducer);

export default store;
