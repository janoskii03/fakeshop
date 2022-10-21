import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../action';
import { Link } from "react-router-dom";
import Item from "./Item";

const ShoppingCart = () => {



    const cart = useSelector((state) => state.shop.cart);

    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * Math.round(item.price) * 30;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);




    const { id, title, image, price, category } = cart;
    const prices = Math.round(price * 30);




    return (
        <div  >
            <div className="check" >
                <h5 >購物車</h5>
                <h5 >數量{totalItems}件</h5>
                <p >總共NTD${totalPrice}元</p>
                <button type="button" class="btn btn-primary">結帳</button>
            </div>
            <div className="checkitem">
                <Item />
            </div >

        </div>
    )




}


export default ShoppingCart;


