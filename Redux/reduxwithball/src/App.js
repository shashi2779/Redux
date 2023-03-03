
import './App.css';
import Ball from './component/Ball';

// ess provider k through hmm apni app ko redux ke sath connect kar sakte hai.
//install & import  react-redux for Provider -> npm i react-redux
import { Provider } from 'react-redux';  

//ess provider ko pata hi nhi hamara "state" kaha hai, kaun se "store" me hai ,
//eske pas koi information nahi hai , toh information k liye hme "store" ko import karna pda.
//ess "store" ko as a "props" pass kar degen "Provider" ko 
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


