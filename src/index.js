import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import Login from './pages/loginR';
import Home from './pages/home';
import About from './pages/About'; 
import Loginc from './pages/loginc';
import Faq from './pages/faq';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Help from './pages/help';
import Registerr from './pages/registerr';
import Registerc from './pages/registerc';
import Dashboardc from './pages/dashboardc';
import Dashboardr from './pages/dashboardr';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path: "/loginr",
        element: <Login/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/loginc",
    element: <Loginc />,
  },
  {
    path: "/help",
    element: <Help/>,
  },
  {
    path: "/faq",
    element: <Faq/>,
  },
  {
    path: "/registerr",
    element: <Registerr/>
  },
  {
    path: "/registerc",
    element: <Registerc />
  },
  {
    path: "/dashboardc",
    element: <Dashboardc />
  },
  {
    path: "/dashboardr",
    element: <Dashboardr />
  },
    ]},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
