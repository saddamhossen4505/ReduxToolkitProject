import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice";
import todoReducer from "../features/ToDo/ToDoSlice";
import userReducer from "../features/User/UserSlice";
import counterMiddleware from "./counterMiddleware";

// Create Store.
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(counterMiddleware);
  },
  devTools: true,
});

// Export.
export default store;
