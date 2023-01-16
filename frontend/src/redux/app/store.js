import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import cartReducer from '../features/cartSlice';
import productReducer from '../features/productSlice';

export const store=configureStore({
    reducer:{
        products:productReducer,
        // cart:cartReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})