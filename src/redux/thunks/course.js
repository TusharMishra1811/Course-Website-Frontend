import { server } from "../../config/constants.js";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllCourses = createAsyncThunk(
  "/allCourses",
  async ({ category = "", keyword = "" }) => {
    try {
      const { data } = await axios.get(
        `${server}/api/v1/courses?keyword=${keyword}&category=${category}`
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const getCourseLectures = createAsyncThunk(
  "/getCourseLectures",
  async ({ courseId }) => {
    try {
      const config = {
        withCredentials: true,
      };

      const { data } = await axios.get(
        `${server}/api/v1/course/${courseId}`,
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

export { getAllCourses, getCourseLectures };
