import {
    SET_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART, ADJUST_ITEM_QTY, LOAD_CURRENT_ITEM
} from "./types";

export const setProducts = (product) => {
    return {
        type: SET_PRODUCTS,
        payload: product,
    };
};


export const addToCart = (itemID) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemID,
        }
    };
};

export const removeFromCart = (itemID) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: itemID,
        }
    };
};

export const adjustItemQty = (itemID, value) => {
    return {
        type: ADJUST_ITEM_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
    };

};


export const loadCurrentItem = (item) => {
    return {
        type: LOAD_CURRENT_ITEM,
        payload: item,
    };
}