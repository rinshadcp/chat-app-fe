import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../userSlice";
import movieSlice from "./movieSlice";
import configSlice from "./configSlice";
import gptSlice from "../gptSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    config: configSlice,
    gpt: gptSlice,
  },
});

export default appStore;
