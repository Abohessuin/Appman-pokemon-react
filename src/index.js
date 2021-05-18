import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore,applyMiddleware, compose } from "redux";
import {Provider} from "react-redux";
import rootReducer from './reducers';
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";


const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
    
  );
  
 