import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWishlistItems:(state,action)=>{
            state.push(action.payload)
        },
        removeWishlist:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)

        }

    }
})
export const {addWishlistItems,removeWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer