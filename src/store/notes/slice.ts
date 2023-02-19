import { createSlice } from "@reduxjs/toolkit";
import { addNote } from "./actions";
import { InitialState } from "./types";

export const initialState: InitialState = {
  list: [],
};

export const slice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNote, (state, { payload }) => {
      state.list = [...state.list, payload];
    });
  },
});
