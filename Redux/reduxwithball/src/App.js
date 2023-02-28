import './App.css';
import Ball from './component/Ball';
import { Provider } from 'react-redux';   //install react-redux -> npm i react-redux
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
