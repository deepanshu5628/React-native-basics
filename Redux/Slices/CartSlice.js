import { createSlice } from "@reduxjs/toolkit";

 const cartSlice=createSlice({
    name:"Cart",
    initialState:{
        cartitems:[],
    },
    reducers:{
        addtocart:(state,actions)=>{
            state.cartitems.push(actions.payload);
        },
    }
})

export const {addtocart}=cartSlice.actions;
export default cartSlice.reducer;