// npm i redux react-redux

import { createStore } from "redux";
import batReducer from "./redux/batReducer";
const store = createStore(batReducer);

export default store;
