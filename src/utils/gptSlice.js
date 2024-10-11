import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptMovieName: null,
    gptMovies: null,
  },
  reducers: {
    updateMovieDetails: (state, action) => {
      const { movieName, movies } = action.payload;
      state.gptMovieName = movieName;
      state.gptMovies = movies;
    },
  },
});

export default gptSlice.reducer;
export const { updateMovieDetails } = gptSlice.actions;
