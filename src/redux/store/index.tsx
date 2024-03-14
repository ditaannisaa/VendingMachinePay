import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../slice/cartSlice';
import balanceSlice from '../slice/balanceSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    balance: balanceSlice,
  },
});

export default store;
