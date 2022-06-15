import './App.css';
import Ball from './components/Ball';
import Bat from './components/Bat';
import { Provider } from 'react-redux';   //install react-redux -> npm i react-redux
import store from './store';

function App() {
  return (
   
   <>
   <Provider store={store}>
       <Ball/>
       <Bat/>
   </Provider>
   
   </>
  );
}

export default App;
