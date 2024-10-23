// import { configureStore } from '@reduxjs/toolkit' 
// import { cartSlice } from './cartSlice'

// export const store = configureStore({
//   reducer: {
//     cart : cartSlice
//   },
// })

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Adjust the path to where your cartSlice is located

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the cart reducer directly
  },
});
