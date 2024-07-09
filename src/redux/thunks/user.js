import { server } from "../../config/constants.js";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk("/login", async ({ email, password }) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${server}/api/v1/login`,
      { email, password },
      config
    );

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

const loadUser = createAsyncThunk("/getMyProfile", async () => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/api/v1/me`, config);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

const logout = createAsyncThunk("/logout", async () => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/api/v1/logout`, config);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

const register = createAsyncThunk("/register", async (formData) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const data = await axios.post(
      `${server}/api/v1/register`,
      formData,
      config
    );

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

const buySubscription = createAsyncThunk("/buysubscription", async () => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/api/v1/subscribe`, config);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

const cancelSubscription = createAsyncThunk("/cancelsubscription", async () => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(`${server}/api/v1/subscribe/cancel`, config);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

export {
  login,
  loadUser,
  logout,
  register,
  buySubscription,
  cancelSubscription,
};
