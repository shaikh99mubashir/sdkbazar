import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  cart: 'cart',
  initialState: {
    user: null,
    status: false,
    packages: null,
    chatuser: null,
    cart: [],
  },
  reducers: {
    AddToCart: (state: any, action: any) => {
      console.log(action.payload, ' : Cart Data Updated in Redux');

      state.cart = action.payload;
    },
    EditToCart: (state: any, action: any) => {
      //   console.log(action.payload, ' : Cart Data');

      state.cart = [...state.cart, action.payload];
    },
  },
});

export const {AddToCart, EditToCart} = userSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;
