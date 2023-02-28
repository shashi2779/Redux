import './App.css';
import Bat from './component/Bat';
import { Provider } from 'react-redux';  
import store from './store';

function App() {
  return (
   
   <>
   <Provider store={store}>
       <Bat/>
   </Provider>
   
   </>
  );
}

export default App;
