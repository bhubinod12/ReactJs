import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Routing from './poc/Routing.jsx'
import {BrowserRouter, Route} from 'react-router-dom'
// const cors = require("cors");
// main.use(cors());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    {/* <Routing></Routing> */}
  </BrowserRouter>
  </React.StrictMode>,
)
