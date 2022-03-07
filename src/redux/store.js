import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./features/usersDataSlice";

export default configureStore({
  reducer: {
    usersData: userDataReducer,
  },
});
