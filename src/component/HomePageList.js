import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, loadCurrentItem, removeFromCart } from "../action";
import { Link } from "react-router-dom";



const HomePageList = () => {


    const products = useSelector((state) => state.shop.products);
    const dispatch = useDispatch();
    const renderList = products.map((product) => {

        const { id, title, image, price, category } = product;



        return (
            <div class="col-md-6 col-sm-12 col-lg-4">
                <div class="card " >
                    <div >
                        <img className="pic" src={image} alt={title} />
                        <div class="card-body text-center">
                            <h6 class="card-title ">{title}</h6>
                            <p class="card-text ">{category}</p>
                            <p class="card-text ">NTD${`${Math.round(price * 30)}`}元</p>
                            <a class="btn" onClick={() => dispatch(loadCurrentItem(product))} ><Link to={`/product/${product.id}`} > 資訊</Link></a>
                            <button class=" btn btn btn-primary" onClick={() => {
                                dispatch(addToCart(id))
                                alert("已加入購物車")
                            }} >加入</button>
                        </div>
                    </div >
                </div >
            </div >

        );
    })

    return (

        <div class="card-group">
            {renderList}
        </div>


    );
};


export default HomePageList;
