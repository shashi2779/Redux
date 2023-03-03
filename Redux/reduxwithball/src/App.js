import './App.css';
import Ball from './component/Ball';

// ess provider k through hmm apni app ko redux ke sath connect kar sakte hai.
//install & import  react-redux for Provider -> npm i react-redux
import { Provider } from 'react-redux';   
import store from './store';

function App() {
  return (
   
   <>
   <Provider store={store}>
       <Ball/>
   </Provider>
   
   </>
  );
}

export default App;
