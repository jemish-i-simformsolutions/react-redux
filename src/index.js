import React from 'react';
import ReactDOM from 'react-dom';
import './Pro.css';
import reportWebVitals from './reportWebVitals';
import  BlogPost  from "./component/BlogPost";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const store=ConfigureStore();
ReactDOM.render(
  
    
    <Provider store={store}>
    <BlogPost/>
    </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
