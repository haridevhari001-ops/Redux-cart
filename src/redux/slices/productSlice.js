import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async API call
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    sessionStorage.setItem("products",JSON.stringify(response.data.products))
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    pending: false,
    products: [],
    error: "",
  },

  reducers: {
    searchProduct:(state,action)=>{
      const searchKey=action.payload
      state.products=state.productsCopy.filter(item=>item.title.toLowerCase().includes(searchKey))
    },
  },
  nextPage:(state,action)=>{
    state.currentPage+=1
  },
  prevPage:(state,action)=>{
    state.currentPage-=1
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.pending = false;
      state.products = action.payload.products;   
      state.productsCopy = action.payload.products;    });
      
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.pending = false;
      state.error = "api call failed";
    });

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.pending = true;
    });
  },
});

export default productSlice.reducer;
export const{searchProducts,nextPage,prevPage,currentPage} = productSlice.actions