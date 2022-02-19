import { createSlice } from '@reduxjs/toolkit'
import {  toast } from 'react-toastify';
const initialState = {
  cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')): [],
  cartTotalQuantity:0,
  cartTotalAmount:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addToCart:(state, action)=>{
          const itemIndex = state.cartItems.findIndex(item=> item.key === action.payload.key)
          if(itemIndex >= 0){
              state.cartItems[itemIndex].cartQuantity += 1
              toast.info(`${state.cartItems[itemIndex].name} increased quantity`, {
                position: 'top-center',
                autoClose:1000
            })
          }
          else{
            const addedProduct = {...action.payload, cartQuantity:1}
            state.cartItems.push(addedProduct)
            toast.success(`${action.payload.name} is added to cart`, {
                position: 'top-center',
                autoClose:1000
            })
          }
          localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
      },
      // end add to cart 
      removeFromCart:(state, action)=>{
        const restItems = state.cartItems.filter(cartItem =>cartItem.key !== action.payload.key)
        state.cartItems = restItems;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      },
      // end remove from cart 
      decreaseCartQuantity:(state, action)=>{
        const itemIndex = state.cartItems.findIndex((cartItem)=> cartItem.key = action.payload.key)
        if(state.cartItems[itemIndex].cartQuantity >1 ){
          state.cartItems[itemIndex].cartQuantity -= 1
        }
        else if(state.cartItems[itemIndex].cartQuantity === 1){
          const restItems = state.cartItems.filter(cartItem =>cartItem.key !== action.payload.key)
        state.cartItems = restItems;
        
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      },
      // end decrease reducer 
      clearCart: (state, action) => {
        // state.cartItems= []
        // localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        localStorage.removeItem('cartItems')
        state.cartItems= []
      },
      // end clear cart 
      getAllTotal:(state, action)=>{
       const {total, quantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
          const {price, cartQuantity} = cartItem;
            const itemTotal = price * cartQuantity;
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity
            return cartTotal;
        },
        {
          total:0,
          quantity:0

        })
        state.cartTotalAmount = total;
        state.cartTotalQuantity = quantity;
      }

  },
  
})

 
export const {addToCart,removeFromCart,decreaseCartQuantity,clearCart, getAllTotal} = cartSlice.actions

export default cartSlice.reducer