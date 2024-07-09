import { createSlice } from "@reduxjs/toolkit";
import { buySubscription, cancelSubscription } from "../thunks/user";

const initialState = {
  loading: false,
  message: null,
  error: null,
  subscriptionId: null,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buySubscription.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(buySubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptionId = action.payload;
      })
      .addCase(buySubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(cancelSubscription.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(cancelSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(cancelSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default subscriptionSlice;
export const { clearError, clearMessage } = subscriptionSlice.actions;
