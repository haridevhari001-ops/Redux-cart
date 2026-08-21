import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    wishlist: [],
  },

  reducers: {

    addtoWishlist: (state, action) => {

      const existingItem = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.wishlist.push(action.payload);
      }

    },

    removedFromWishlist: (state, action) => {

      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );

    },

  },
});

export default wishlistSlice.reducer;

export const {
  addtoWishlist,
  removedFromWishlist,
} = wishlistSlice.actions;