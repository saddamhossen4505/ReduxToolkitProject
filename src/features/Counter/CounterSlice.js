import { createSlice } from "@reduxjs/toolkit";

// initialState.
const initialState = {
  count: 0,
};

// Create Slice.
export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, { type, payload }) => {
      state.count = state.count + 1;
    },

    decrement: (state, { type, payload }) => {
      state.count = state.count - 1;
    },

    reset: (state, { type, payload }) => {
      state.count = 0;
    },
  },
  extraReducers: (builder) => {},
});

// Export Actions.
export const { increment, decrement, reset } = CounterSlice.actions;

// Export Reducer.
export default CounterSlice.reducer;
