import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./component/About";
import ConnectUs from "./component/ConnectUs";
import HomePage from "./component/HomePage";
import ShoppingRules from "./component/ShoppingRules";
import Header from "./component/Header";
import ShoppingCart from "./component/ShoppingCart";
import SingleItem from "./component/SingleItem";
import { useSelector } from "react-redux";
import Login from "./component/Login";
import './App.css';



const App = () => {

    const [token, setToken] = useState(localStorage.getItem('userToken') ?? null);

    return (
        <div >
            {token ? <Router >
                <div>
                    <Header setToken={setToken} />
                    <Routes>
                        <Route element={<HomePage />} path='/'></Route>
                        <Route element={<SingleItem />} path='/product/:id'></Route>
                        <Route element={<About />} path='/about'></Route>
                        <Route element={<ShoppingRules />} path='/rules'></Route>
                        <Route element={<ConnectUs />} path='/connect'></Route>
                        <Route element={<ShoppingCart />} path='/shoppingcart'></Route>
                        <Route>404 Not Found!</Route>
                    </Routes>
                </div>
            </Router > : <Login token={token} setToken={setToken} ></Login>}


        </div >
    );

};

export default App;