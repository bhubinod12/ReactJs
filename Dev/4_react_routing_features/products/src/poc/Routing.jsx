import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom'


function Routing() {
  return (
    <>
        <h2>Routing Examples</h2>
        <nav className='navBar'>
            <ul>
                <li><Link to ='/home'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/users'>User</Link></li>
            </ul>
        </nav>
            <Routes>
                <Route path='/home' element = {<Home></Home>}></Route>
                <Route path='products' element = {<Products></Products>}></Route>
                <Route path='about' element = {<About></About>}></Route>
                <Route path='users/:id/:class' element = {<Users></Users>}></Route>
                <Route path="/abc" element={<Navigate to="/home"></Navigate>}></Route>
                <Route path='*' element = {<Error></Error>}></Route>
            </Routes>
    </>
  )
}
function Home() {
    return <h1>I am home page</h1>
}
function Products() {
    return <h1>I am Products page</h1>
}
function About() {
    return <h1>I am About page</h1>
}
function Error () {
    return <h1>Page Not Found!!!!</h1>
}
function Users(props) {
    let params = useParams();
    let [user, setUser] = useState(null);
    console.log("46", params);
    // https://jsonplaceholder.typicode.com/users/${userPram.id}
    useEffect(() => {
        // console.log(userId);
        (async function () {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            const userData = await resp.json();
            console.log(userData);
            setUser(userData);
        })()
    }, [])  
    return (
        <>
        {user == null ? <h3>Loading....</h3> :
         <>
            <h3>Name: {user.name}</h3>
            <h3>Name: {user.username}</h3>
            <h4>Phone No: {user.phone}</h4>
        </>
        }
        </>
    )
}
export default Routing