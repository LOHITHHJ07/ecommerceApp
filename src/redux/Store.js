import { legacy_createStore as createStore} from 'redux'
import { productReducer, selectedProductReducer } from "./reducers/productReducer";
import cartReducer from "./reducers/CartSlice"
import { configureStore } from '@reduxjs/toolkit';
 

const store=configureStore({
    reducer:{
        Cart:cartReducer,
        allProducts:productReducer,
        product:selectedProductReducer,
        }   
})

export  default store;