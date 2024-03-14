import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    topUp(state, action) {
      state.balance += action.payload.amount;
    },
  },
});

export const {topUp} = balanceSlice.actions;
export default balanceSlice.reducer;
