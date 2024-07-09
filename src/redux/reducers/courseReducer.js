import { createSlice } from "@reduxjs/toolkit";
import { getAllCourses, getCourseLectures } from "../thunks/course";
import { addToPlaylist } from "../thunks/profile";

const initialState = {
  courses: [],
  message: null,
  error: null,
  loading: false,
  lectures: [],
};

const courseSlice = createSlice({
  name: "courses",
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
      .addCase(getAllCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.courses;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToPlaylist.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToPlaylist.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(addToPlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCourseLectures.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourseLectures.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures = action.payload.lectures;
      })
      .addCase(getCourseLectures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice;
export const { clearError, clearMessage } = courseSlice.actions;
