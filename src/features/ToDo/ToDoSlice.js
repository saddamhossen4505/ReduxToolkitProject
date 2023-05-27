import { createSlice } from "@reduxjs/toolkit";

// initialState.
const initialState = {
  todos: [],
  loading: false,
  msg: null,
  error: null,
};

// Create Slice.
export const ToDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewToDo: (state, { type, payload }) => {
      state.todos.push(payload);
    },

    deleteToDo: (state, { type, payload }) => {
      state.todos = state.todos.filter((data) => data !== payload);
    },
  },
  extraReducers: (builder) => {},
});

// Export State.
export const todoState = (state) => state.todo;

// Export actions.
export const { addNewToDo, deleteToDo } = ToDoSlice.actions;

// Export reducer.
export default ToDoSlice.reducer;
