import { SET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, ADJUST_ITEM_QTY, LOAD_CURRENT_ITEM } from "../action/types";


const initialState = {
    products: [],
    cart: [],
    currentItem: null,
};




export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            const item = state.products.find(
                (product) => product.id === action.payload.id
            );

            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };

        default:
            return state;

    }

}