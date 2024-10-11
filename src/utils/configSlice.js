import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    updateLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default configSlice.reducer;
export const { updateLang } = configSlice.actions;
