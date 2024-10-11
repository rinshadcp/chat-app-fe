import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayMovie: null,
    trailerInfo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayMovie: (state, action) => {
      state.nowPlayMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerInfo: (state, action) => {
      state.trailerInfo = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayMovie,
  addTrailerInfo,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} = movieSlice.actions;
