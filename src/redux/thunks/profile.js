import { server } from "../../config/constants.js";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const updateProfile = createAsyncThunk(
  "/updateprofile",
  async ({ name, email }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(
        `${server}/api/v1/updateprofile`,
        { name, email },
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const changePassword = createAsyncThunk(
  "/changePassword",
  async ({ oldPassword, newPassword }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(
        `${server}/api/v1/changepassword`,
        { oldPassword, newPassword },
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const updateProfilePicture = createAsyncThunk(
  "/updateprofilepicture",
  async (formData) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.put(
        `${server}/api/v1/updateprofilepicture`,
        formData,
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const forgetPassword = createAsyncThunk(
  "/forgetPassword",
  async ({ email }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${server}/api/v1/forgetpassword`,
        { email },
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const resetPassword = createAsyncThunk(
  "/resetPassword",
  async ({ token, password }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(
        `${server}/api/v1/resetpassword/${token}`,
        { password },
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const addToPlaylist = createAsyncThunk(
  "/addToPlaylist",
  async ( {id} ) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      };

      console.log(id);

      const { data } = await axios.post(
        `${server}/api/v1/addtoplaylist`,
        { id },
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const removeFromPlaylist = createAsyncThunk(
  "/removeFromPlaylist",
  async ({ id }) => {
    try {
    const config = {
        withCredentials: true,
      };

      const { data } = await axios.delete(
        `${server}/api/v1/removefromplaylist?id=${id}`,
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

export {
  updateProfile,
  changePassword,
  updateProfilePicture,
  resetPassword,
  forgetPassword,
  addToPlaylist,
  removeFromPlaylist,
};
