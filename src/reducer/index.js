import { combineReducers } from "redux";
import { shopReducer } from './reducers';

const reducers = combineReducers({
    shop: shopReducer,

});

export default reducers;