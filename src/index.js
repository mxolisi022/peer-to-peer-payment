import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import SignIn from './Pages/SignIn.js';
import Note from './Pages/Note.js';
import CashSend from './Pages/CashSend.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    
    {
      path: "/",
      element: <SignIn/>,
    },
    {
      path: "note",
      element: <Note/>,
    },
    {
      path: "cashSend",
      element: <CashSend/>,
    },
    // {
    //   path: "scan",
    //   element: <App/>,
    // },
    
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
