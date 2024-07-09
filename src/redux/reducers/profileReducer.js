import { createSlice } from "@reduxjs/toolkit";
import {
  changePassword,
  forgetPassword,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
} from "../thunks/profile";

const initialState = {
  loading: false,
  message: null,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
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
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProfilePicture.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(updateProfilePicture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeFromPlaylist.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFromPlaylist.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(removeFromPlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default profileSlice;
export const { clearError, clearMessage } = profileSlice.actions;
