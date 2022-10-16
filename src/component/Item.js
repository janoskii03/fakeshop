import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, loadCurrentItem, adjustItemQty } from "../action";




const Item = () => {

    const cart = useSelector((state) => state.shop.cart);
    const dispatch = useDispatch();

    const [input, setInput] = useState(cart.qty)



    const renderList = cart.map((product) => {

        const { id, title, image, price, category, qty } = product;


        const onChangeHandler = (e) => {
            setInput(e.target.value);
            dispatch(adjustItemQty(id, e.target.value))
        }
        return (


            <div class="col-md-6 col-sm-12 col-lg-4">
                <div class="card " >

                    <div >
                        <img src={image} class="img-fluid mx-auto " alt={title} />
                        <div class="card-body text-center">
                            <h5 class="card-title ">{title}</h5>
                            <p class="card-text ">{category}</p>
                            <p class="card-text ">NTD{`${Math.round(price * 30)}`}元</p>
                            <label>數量</label>
                            <input type="number" min="1" value={qty} onChange={onChangeHandler} id="qty"
                                name="qty" />
                            <button class=" btn" onClick={() => dispatch(removeFromCart(id))} >移除</button>
                        </div>
                    </div >
                </div >
            </div >

        );
    })

    return (
        <>
            {renderList}
        </>


    );


}

export default Item;