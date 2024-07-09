import { server } from "../../config/constants";
import axios from "axios";


import { createAsyncThunk } from "@reduxjs/toolkit";

const createCourse = createAsyncThunk("/createcourse", async (formData) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `${server}/api/v1/createcourse`,
      formData,
      config
    );

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

const deleteCourse = createAsyncThunk("/deletecourse", async ({ courseId }) => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/api/v1/course/${courseId}`,
      config
    );

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

const addLecture = createAsyncThunk(
  "/addlecture",
  async ({ courseId, formData }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        `${server}/api/v1/course/${courseId}`,
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

const deleteLecture = createAsyncThunk(
  "/deletelecture",
  async ({ courseId, lectureId }) => {
    try {
      const config = {
        withCredentials: true,
      };

      const { data } = await axios.delete(
        `${server}/api/v1/lecture?courseId=${courseId}&lectureId=${lectureId}`,
        config
      );





      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const getAllUsers = createAsyncThunk("/getallusers", async () => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/api/v1/admin/users`, config);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

const updateUserRole = createAsyncThunk(
  "/updateuserrole",
  async ({ userId }) => {
    try {
      const config = {
        withCredentials: true,
      };

      const { data } = await axios.put(
        `${server}/api/v1/admin/user/${userId}`,
        {},
        config
      );

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
);

const deleteUser = createAsyncThunk("/deleteuser", async ({ userId }) => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/api/v1/admin/user/${userId}`,
      config
    );

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

const getDashboardStats = createAsyncThunk("/getdashboardstats", async () => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/api/v1/admin/stats`, config);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error.response.data.message;
  }
});

export {
  createCourse,
  deleteCourse,
  addLecture,
  deleteLecture,
  getAllUsers,
  updateUserRole,
  deleteUser,
  getDashboardStats,
};
