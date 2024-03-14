import {createSlice} from '@reduxjs/toolkit';

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
  },
});

export const {topUp} = balanceSlice.actions;
export default balanceSlice.reducer;
