import { createSlice } from "@reduxjs/toolkit";
import { addNewUser, deleteUser, getAllUser } from "./UserApi";

// initialState.
const initialState = {
  users: [],
  loading: false,
  msg: null,
  error: null,
};

// Create Slice.
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(getAllUser.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(getAllUser.rejected, (state, { type, payload }) => {
        state.loading = false;
      })
      .addCase(deleteUser.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { type, payload }) => {
        state.users = state.users.filter((data) => data._id !== payload);
      })
      .addCase(deleteUser.rejected, (state, { type, payload }) => {
        state.loading = false;
      })
      .addCase(addNewUser.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(addNewUser.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.users.push(payload.user);
      })
      .addCase(addNewUser.rejected, (state, { type, payload }) => {
        state.loading = false;
      });
  },
});

// Export State.
export const userState = (state) => state.user;

// Export Reducer.
export default UserSlice.reducer;

// Export Actions.
export const {} = UserSlice.actions;
