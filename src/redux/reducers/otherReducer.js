import { createSlice } from "@reduxjs/toolkit";
import { contactUs, courseRequest } from "../thunks/other";

const initialState = {
  error: null,
  message: null,
  loading: false,
};

const otherSlice = createSlice({
  name: "other",
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
      .addCase(contactUs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(contactUs.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(contactUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(courseRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(courseRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(courseRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default otherSlice;
export const { clearError, clearMessage } = otherSlice.actions;
