import { createStore, combineReducers } from "redux";
import productReducer from "./productReducer";

const store=createStore(combineReducers({product: productReducer}));

export default store;