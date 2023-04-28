import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  cart: any[];
}

const initialState: UserState = {
  cart: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    AddToCart: (state, action: PayloadAction<any[]>) => {
      state.cart = action.payload;
      console.log(action.payload, ' : Cart Data Updated in Redux');
    },
  },
});

export const {AddToCart} = userSlice.actions;

export const selectUser = (state: {user: UserState}) => state.user.cart;

export default userSlice.reducer;

// import {createSlice} from '@reduxjs/toolkit';

// interface UserState {
//   cart: any[];
// }

// const initialState: UserState = {
//   cart: [],
// };
// export const userSlice = createSlice({
//   name: 'user',
//   cart: 'cart',
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     AddToCart: (state: any, action: any) => {
//       // console.log(action.payload, ' : Cart Data Updated in Redux');

//       state.cart = action.payload;
//     },
//   },
// });

// export const {AddToCart} = userSlice.actions;

// export const selectUser = (state: any) => state.user.user;

// export default userSlice.reducer;
