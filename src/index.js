import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



//  Redux & States
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/user'
import AdminStates from './features/admin-panel/AdminStates';
import LoadingStates from './features/admin-panel/LoadingStates';
import DateStates from './features/admin-panel/DateStates';

const store = configureStore({
  reducer: {
    user : userReducer,
    adminPanel : AdminStates , 
    loading : LoadingStates , 
    date : DateStates
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
