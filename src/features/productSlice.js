import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productsFetch = createAsyncThunk(
    'products/productsFetch',
    async () => {
      const response = await axios.get('http://localhost:5000/products')
      return response?.data
    }
  )
const initialState = {
    items:[],
    status:null
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers:{
    [productsFetch.pending]:(state, action)=>{
        state.status = 'pending';
    },
    [productsFetch.fulfilled]:(state, action)=>{
        state.status = 'success';
        state.items = action.payload
    },
    [productsFetch.rejected]:(state, action)=>{
        state.status = 'rejected';
    }
  }
    
}) 
 
export const { } = productSlice.actions

export default productSlice.reducer