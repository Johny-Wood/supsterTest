import { createSlice } from "@reduxjs/toolkit";
import { addNote, editNote, setEditingNoteIndex } from "./actions";
import { InitialState } from "./types";

export const initialState: InitialState = {
  list: [],
  editingNoteIndex: null,
};

export const slice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNote, (state, { payload }) => {
      state.list = [...state.list, payload];
    });
    builder.addCase(editNote, (state, { payload }) => {
      state.list[payload.index] = { title: payload.title, text: payload.text };
    });
    builder.addCase(setEditingNoteIndex, (state, { payload }) => {
      state.editingNoteIndex = payload.index;
    });
  },
});
