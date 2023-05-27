import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get All User.
export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  const response = await axios.get("http://localhost:5050/api/v1/user");
  return response.data;
});

// Delete User.
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  await axios.delete(`http://localhost:5050/api/v1/user/${id}`);
  return id;
});

// Add NewUser.
export const addNewUser = createAsyncThunk("user/createUser", async (data) => {
  const response = await axios.post(`http://localhost:5050/api/v1/user/`, data);
  return response.data;
});
