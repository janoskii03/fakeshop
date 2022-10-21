import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, adjustItemQty } from "../action";




const SingleItem = () => {

    const currentItem = useSelector((state) => state.shop.currentItem);

    const dispatch = useDispatch();


    return (


        <div class="col-md-6 col-sm-12 col-lg-4">
            <div class="card " >

                <div >
                    <img src={currentItem.image} class="pic" alt={currentItem.title} />
                    <div class="card-body text-center">
                        <h5 class="card-title ">{currentItem.title}</h5>
                        <p class="card-text ">{currentItem.category}</p>
                        <p class="card-text ">NTD${`${Math.round(currentItem.price * 30)}`}元</p>
                        <p class="card-text ">{currentItem.description}</p>
                        <button class=" btn btn btn-primary" onClick={() => dispatch(addToCart(currentItem.id))} >加入</button>

                    </div>
                </div >
            </div >
        </div >
    );





}

export default SingleItem;