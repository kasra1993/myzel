import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: null,
  error: null,
  productItem: {},
};

export const getProducts = createAsyncThunk(
  "productsSlice/getProducts",
  async () => {
    return await fetch("https://dummyjson.com/products?limit=8").then((res) =>
      res.json()
    );
  }
);
export const getProductsById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (productId, thunkAPI) => {
    return await fetch(`https://dummyjson.com/products/${productId}`).then(
      (res) => res.json()
    );
  }
);
const productsSlice = createSlice({
  name: "productsSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
    builder.addCase(getProductsById.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductsById.fulfilled, (state, action) => {
      state.status = "success";
      state.productItem = action.payload;
    });
    builder.addCase(getProductsById.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
