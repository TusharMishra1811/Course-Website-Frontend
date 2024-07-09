import { server } from "../../config/constants";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const contactUs = createAsyncThunk(
  "/contactus",
  async ({ name, email, message }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${server}/api/v1/contact`,
        { name, email, message },
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const courseRequest = createAsyncThunk(
  "/courserequest",
  async ({ name, email, course }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${server}/api/v1/courserequest`,
        { name, email, course },
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

export { contactUs, courseRequest };
