import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';



const Header = ({ setToken }) => {
    const cart = useSelector((state) => state.shop.cart);
    const [cartCount, setCartCount] = useState(0);

    const logOutHandler = () => {
        setToken("");
        localStorage.clear();
    }

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });

        setCartCount(count)
    }, [cart, cartCount]);

    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light col-sm-6 col-lg-12 col-md-9">
                    <a class="nav-link " aria-current="page" ><Link to="/">FAKE SHOP</Link></a>
                    <a class="nav-link"><Link to="/">首頁</Link></a>
                    <a class="nav-link" ><Link to="/about">關於我們</Link></a>
                    <a class="nav-link" ><Link to="/rules">運費規則</Link></a>
                    <a class="nav-link" ><Link to="/connect">聯絡我們</Link></a>
                    <a class="nav-link">
                        <Link to="/shoppingcart">
                            <button class="btn position-relative">購物車
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartCount} <span class="visually-hidden">unread messages</span></span>
                            </button>
                        </Link>

                    </a>
                    <button onClick={() => logOutHandler()}>登出</button>
                </nav>
            </div>
        </div >
    )
};

export default Header;