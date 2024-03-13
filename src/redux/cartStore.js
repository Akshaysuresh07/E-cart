import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import WishlistSlice from "./slice/WishlistSlice";
import CartSlice from "./slice/CartSlice";


const cartStore=configureStore({
    reducer:{
        productReducer: productSlice,
        wishlistReducer:WishlistSlice,
        cartReducer:CartSlice

    }
})
export default cartStore