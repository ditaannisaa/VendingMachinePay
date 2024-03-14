import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {removeItem} from './cartSlice';

const initialState = {
  balance: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    topUp(state, action) {
      // let balanceAmount = action.payload.amount + state.balance;
      // console.log(balanceAmount);
      let balanceAmount = Number(action.payload.amount);
      if (!isNaN(balanceAmount)) {
        // Pastikan amount tidak NaN
        state.balance += balanceAmount;
        console.log('New balance:', state.balance);
      } else {
        console.error('Invalid amount:', action.payload.amount);
      }
    },
    withdrawal(state, action) {
      let balanceAmount = action.payload.total;
      if (state.balance >= balanceAmount) {
        // Pastikan amount tidak NaN
        state.balance -= balanceAmount;
        // console.log('New balance:', state.balance);
      } else if (state.balance === 0) {
        state.balance;
      }
    },
  },
});

export const {topUp, withdrawal} = balanceSlice.actions;
export default balanceSlice.reducer;
