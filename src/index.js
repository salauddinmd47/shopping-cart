import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productReducer, { productsFetch } from './features/productSlice.js'
import cartReducer, { getAllTotal } from './features/cartSlice.js'
import { productsApi } from './features/productsApi';

 const store = configureStore({
  reducer: {
    products:productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productsApi.middleware),
})
store.dispatch(productsFetch())
store.dispatch(getAllTotal())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

 
