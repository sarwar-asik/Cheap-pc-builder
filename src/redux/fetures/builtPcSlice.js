import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
//   total: 0,
};

const pcBuiltSlice = createSlice({
  name: 'pcBuilt',
  initialState: initialState,
  reducers: {
    addTopPBuilt: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        console.log('the product is exists');
        // existingProduct.quantity = existingProduct.quantity + 1;
      } else {
        state.products.push({ ...action.payload });
      }
    //   state.total += action.payload.price;
    },
    removeFromPcBuilt: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    //   state.total -= action.payload.price * action.payload.quantity;
    },
    removeOne: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct ) {
        console.log('the product is exists');
        // existingProduct.quantity = existingProduct.quantity - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }

    //   state.total -= action.payload.price;
    },
  },
});

export const { addToPcBuilt, removeFromPcBuilt, removeOne } = pcBuiltSlice.actions;

export default pcBuiltSlice.reducer;
