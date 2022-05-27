import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './icons/icons.css'
// import Attendance from './components/attendance';
import reportWebVitals from './reportWebVitals';

// import AllZones from './components/allzones';
// import Profile from './components/profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
