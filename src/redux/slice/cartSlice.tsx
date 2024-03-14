import {createSlice} from '@reduxjs/toolkit';
import {Cart, Product} from '../../types/productType';

interface CartType {
  cartItems: Cart[];
}

const initialState: CartType = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.cartItems?.length == 0) {
        let cart: Cart = {
          id: action.payload.id,
          quantity: 1,
          product_name: action.payload.product_name,
          image: action.payload.image,
          price: action.payload.price,
          stock: action.payload.stock,
        };
        state.cartItems.push(cart);
      } else {
        let check = false;
        state.cartItems?.map((item, key) => {
          if (item.id == action.payload.id) {
            state.cartItems[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            product_name: action.payload.product_name,
            image: action.payload.image,
            price: action.payload.price,
            stock: action.payload.stock,
          };
          state.cartItems?.push(_cart);
        }
      }
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload,
      );
    },

    removeAll(state, action) {
      state.cartItems = [];
    },
  },
});

export const {addItem, removeItem, removeAll} = cartSlice.actions;
export default cartSlice.reducer;
