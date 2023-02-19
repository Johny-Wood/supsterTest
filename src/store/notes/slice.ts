import { createSlice } from "@reduxjs/toolkit";
import { addNote, deleteNote, editNote, setEditingNoteId } from "./actions";
import { InitialState } from "./types";

export const initialState: InitialState = {
  list: [],
  editingNoteId: null,
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
      const index = state.list.findIndex((el) => el.id === payload.id);

      state.list[index] = { title: payload.title, text: payload.text, id: payload.id };
    });
    builder.addCase(setEditingNoteId, (state, { payload }) => {
      state.editingNoteId = payload.id;
    });
    builder.addCase(deleteNote, (state, { payload }) => {
      const newList = state.list.filter((el) => el.id !== payload.id);

      state.list = newList;
    });
  },
});
