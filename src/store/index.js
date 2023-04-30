import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authReducer from './auth';


const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authReducer },
});




export default store;