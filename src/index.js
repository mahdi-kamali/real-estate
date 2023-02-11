import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



//  Redux & States
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/user/user'
import AdminStates from './features/admin-panel/AdminStates';
import LoadingStates from './features/admin-panel/LoadingStates';
import DateStates from './features/admin-panel/DateStates';
import PopUpStates from './features/admin-panel/PopUpStates';
import CategoriesState from './features/admin-panel/CategoriesState';
import AlertsState from './features/alert/AlertsState';
import PostsState from './features/admin-panel/PostsState';
import GalleryStates from './features/admin-panel/GalleryStates';
import PropertiesState from './features/admin-panel/PropertiesState';
import CommentsState from './features/admin-panel/CommentsState';
import ColorsState from './features/admin-panel/ColorsState';

const store = configureStore({
  reducer: {
    user : userReducer,
    adminPanel : AdminStates , 
    loading : LoadingStates , 
    date : DateStates ,
    popUp : PopUpStates , 
    categories : CategoriesState , 
    alerts : AlertsState , 
    posts : PostsState , 
    gallery : GalleryStates  ,
    properties : PropertiesState , 
    comments : CommentsState , 
    colors : ColorsState
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
