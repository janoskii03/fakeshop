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
                <nav class="navbar navbar-expand-lg col-sm-6 col-lg-12 col-md-9 navbar-light ">
                    <a class="nav-link navbar-brand " aria-current="page" ><Link to="/">FAKE SHOP</Link></a>

                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#linkbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav" id="linkbar">
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
                        <button class="position-absolute top-1 end-0 m-2" onClick={() => logOutHandler()}>登出</button>
                    </div>






                </nav>
            </div>
        </div >
    )
};

export default Header;