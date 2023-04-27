import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Reducers/Reducers';

export default configureStore({
  reducer: {
    user: userReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {warnAfter: 128},
      // serializableCheck: { warnAfter: 128 },
    }),
});
