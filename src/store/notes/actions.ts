import { createAction } from "@reduxjs/toolkit";

export const addNote = createAction<{ title: string; text: string; id: number }>(
  "notes/addNote"
);

export const editNote = createAction<{ title: string; text: string; id: number }>(
  "notes/editNote"
);

export const deleteNote = createAction<{ id: number }>(
  "notes/deleteNote"
);

export const setEditingNoteId = createAction<{ id: number | null }>(
  "notes/setEditingNoteIndex"
);

