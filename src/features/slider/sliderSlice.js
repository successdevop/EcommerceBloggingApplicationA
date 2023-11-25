import { createSlice } from "@reduxjs/toolkit";
import { testimonialData } from "../../assets/data/data";

const initialState = {
  data: testimonialData,
  count: 0,
};

const slider = createSlice({
  name: "slider",
  initialState,
  reducers: {
    prevSlide: (state) => {
      state.count = state.count > 0 ? state.count - 1 : state.data.length - 1;
    },

    nextSlide: (state) => {
      state.count = state.count < state.data.length - 1 ? state.count + 1 : 0;
    },
  },
});

export const { prevSlide, nextSlide } = slider.actions;
export default slider.reducer;
