// npm i redux react-redux


//import reducer
import ballReducer from "./redux/ballReducer";
import { createStore } from "redux";


const store = createStore(ballReducer);

export default store;
