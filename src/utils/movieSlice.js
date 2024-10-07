import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayMovie: null,
    trailerInfo: null,
  },
  reducers: {
    addNowPlayMovie: (state, action) => {
      state.nowPlayMovie = action.payload;
    },
    addTrailerInfo: (state, action) => {
      state.trailerInfo = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayMovie,addTrailerInfo } = movieSlice.actions;
