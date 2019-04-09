import { combineReducers } from "redux";
import ProductReducer from "../ProductReducer/index";
import BasketReducer from '../BasketReducer/index';

export default combineReducers({ ProductReducer, BasketReducer });


