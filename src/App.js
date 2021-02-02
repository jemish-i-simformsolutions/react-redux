import './App.css';
import Component1 from './component/component1';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
const store=ConfigureStore();
function App() {
  return (
   
    <Provider store={store}>
   <Component1/>  
   </Provider> 
    
    
  );
}

export default App;
