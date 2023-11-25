import { createSlice } from "@reduxjs/toolkit";
import { dataBase } from "../../assets/data/dataBase";

const initialState = {
  dataBase: dataBase,
  page: 1,
  maxPagePost: 3,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageHandler: (state, action) => {
      if (
        action.payload >= 1 &&
        action.payload <=
          Math.ceil(state.dataBase.posts.length / state.maxPagePost) &&
        action.payload !== state.page
      ) {
        state.page = action.payload;
      }
    },
  },
});

export const { setPageHandler } = paginationSlice.actions;
export default paginationSlice.reducer;
