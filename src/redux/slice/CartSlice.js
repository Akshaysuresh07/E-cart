import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtoCart:(state,action)=> {
            const existingProduct=state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                state=[...remainingProducts,existingProduct]
            }
            else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        } ,
        removeCart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        incQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.price*existingProduct.quantity
            const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProducts,existingProduct]

        },descQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.price*existingProduct.quantity
            const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProducts,existingProduct]

        },
        emptyCart:(state,action)=>{
            return state= [ ]
        }
     }
})
export const {addtoCart,removeCart,incQuantity,descQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer