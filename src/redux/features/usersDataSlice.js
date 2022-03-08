import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: {},
  filter: "",
  filterGender: 0,
  user: {},
  showModal: false,
  currentPage: 1,
};

export const usersDataSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFilterGender: (state, action) => {
      state.filterGender = action.payload;
    },
    getUser: (state, action) => {
      state.user = state.usersData.results.find(
        (user) => user.login.uuid === action.payload
      );
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUsersData,
  setFilter,
  setFilterGender,
  getUser,
  setShowModal,
  setCurrentPage,
} = usersDataSlice.actions;

export default usersDataSlice.reducer;
