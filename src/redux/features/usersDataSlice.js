import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersData = createAsyncThunk(
  "usersData/getUsersData",
  async () => {
    return fetch(
      "https://randomuser.me/api/?page=5&results=50&seed=abc&noinfo"
    ).then((res) => res.json());
  }
);

const initialState = {
  usersData: {},
  loading: false,
  filter: "",
  filterGender: 0,
  user: {},
  showModal: false,
};

const extraReducers = {
  [getUsersData.fulfilled]: (state, action) => {
    state.usersData = action.payload;
  },
};

export const usersDataSlice = createSlice({
  name: "usersData",
  initialState,
  extraReducers,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFilterGender: (state, action) => {
      state.filterGender = action.payload;
    },
    getUser: (state, action) => {
      state.user = state.usersData.results.find(
        (user) => user.login.uuid == action.payload
      );
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, setFilterGender, getUser, setShowModal } =
  usersDataSlice.actions;

export default usersDataSlice.reducer;
