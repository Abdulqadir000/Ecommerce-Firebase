// import { createSlice } from '@reduxjs/toolkit'

// // Initial state, fallback to empty array if no cart is found in localStorage
// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       // Just push the serialized item into the cart
//       state.push(action.payload);
//     },
//     deleteFromCart(state, action) {
//       return state.filter(item => item.id !== action.payload.id);
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.find((product) => product.id === action.payload);
//       if (item) {
//         item.quantity += 1; // Mutate the draft directly
//       }
//     },
    
//     decrementQuantity: (state, action) => {
//       const item = state.find((product) => product.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1; // Mutate the draft directly
//       }
//     },
    
//   },
// });

// // Export actions and reducer
// export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit'

// Initial state, fallback to empty array if no cart is found in localStorage
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // Just push the serialized item into the cart
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const item = state.find((product) => product.id === action.payload);
      if (item) {
        item.quantity += 1; // Mutate the draft directly
      }
    },
    
    decrementQuantity: (state, action) => {
      const item = state.find((product) => product.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Mutate the draft directly
      }
    },
    clearCart: (state) => {
      return []; // Clear the entire cart
    },
  },
});

// Export actions and reducer
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
