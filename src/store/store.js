import { configureStore } from "@reduxjs/toolkit";
import sliderReducers from "../features/slider/sliderSlice";
import paginationReducers from "../features/pagination/paginationSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducers,
    pagination: paginationReducers,
  },
});
