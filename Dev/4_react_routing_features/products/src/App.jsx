import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routing from './poc/Routing'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Pagenotfound from './components/Pagenotfound'
import Home from './components/Home'
import Products from './components/Products'
import Productdetails from './components/Productdetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    // <h1>Hello routing!!!!</h1>
    // <Routing></Routing>
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element= {<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/products/:id' element={<Productdetails></Productdetails>}></Route>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path='*' element= {<Pagenotfound></Pagenotfound>}></Route>
      </Routes>
    </>
    
  )
}

export default App
