import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import reducers from "../reducer";
import { setProducts } from '../action/index';
import HomePageList from "./HomePageList";



const HomePage = () => {

    const products = useSelector((state) => state.shop.products)
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="ui grid container">
            <HomePageList />
        </div>
    );
}

export default HomePage;