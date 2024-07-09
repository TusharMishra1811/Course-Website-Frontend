import { createSlice } from "@reduxjs/toolkit";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  deleteUser,
  getAllUsers,
  getDashboardStats,
  updateUserRole,
} from "../thunks/admin";

const initialState = {
  loading: false,
  message: null,
  error: null,
  users: [],
  stats: null,
  viewsCount: 0,
  subscriptionCount: 0,
  usersCount: 0,
  usersPercentage: 0,
  subscriptionPercentage: 0,
  viewsPercentage: 0,
  usersPercentage: 0,
  subscriptionProfit: false,
  viewsProfit: false,
  usersProfit: false,
};

const adminSlice = createSlice({
  name: "admin",
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
      .addCase(createCourse.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(deleteCourse.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(addLecture.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addLecture.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(addLecture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(deleteLecture.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteLecture.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteLecture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(updateUserRole.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUserRole.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(updateUserRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getDashboardStats.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDashboardStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload.stats;
        state.viewsCount = action.payload.viewsCount;
        state.subscriptionCount = action.payload.subscriptionCount;
        state.usersCount = action.payload.usersCount;
        state.usersPercentage = action.payload.usersPercentage;
        state.subscriptionPercentage = action.payload.subscriptionPercentage;
        state.viewsPercentage = action.payload.viewsPercentage;
        state.usersPercentage = action.payload.usersPercentage;
        state.subscriptionProfit = action.payload.subscriptionProfit;
        state.viewsProfit = action.payload.viewsProfit;
        state.usersProfit = action.payload.usersProfit;
      })
      .addCase(getDashboardStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default adminSlice;
export const { clearError, clearMessage } = adminSlice.actions;
