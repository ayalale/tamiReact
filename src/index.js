import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import tasksSlice from './redux/todoSlice';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import textSlice from './redux/postSlice'
import peopleSlice from './redux/userSlice'
const root = ReactDOM.createRoot(document.getElementById('root'));
const myRedux =  configureStore ({
  reducer: {
    tasksSlice,
    textSlice,
    peopleSlice
  }
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myRedux}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
