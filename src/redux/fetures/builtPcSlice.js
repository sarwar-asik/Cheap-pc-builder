import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const pcSlice = createSlice({
  name: "pcBuilt",
  initialState: initialState,
  reducers: {
    addToPcBuilt: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.category === action.payload.category
      );
      if (existingProduct) {
        console.log("the product is exists");
        // existingProduct.quantity = existingProduct.quantity + 1;
      } else {
        state.products.push({ ...action.payload });
      }
      state.total += action.payload.price;
    },
    removeFromPcBuilt: (state, action) => {
      state.products = state.products.filter(
        (product) => product.category !== action.payload.category
      );
      //   state.total -= action.payload.price * action.payload.quantity;
    },
    removeOne: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.category === action.payload.category
      );
      if (existingProduct) {
        // console.log("the product is exists",existingProduct);
        console.log(state.products);
        state.total -= action.payload.price;

        state.products = state.products.filter(
          (product) => product.category !== action.payload.category
        );
        // // existingProduct.quantity = existingProduct.quantity - 1;
    
      }
    },
  },
});

export const { addToPcBuilt, removeFromPcBuilt, removeOne } = pcSlice.actions;

export default pcSlice.reducer;
