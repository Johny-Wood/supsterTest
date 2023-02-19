import { createAction } from "@reduxjs/toolkit";

export const addNote = createAction<{ title: string; text: string }>(
  "notes/addNote"
);

export const editNote = createAction<{ title: string; text: string; index: number }>(
  "notes/editNote"
);

export const setEditingNoteIndex = createAction<{ index: number | null }>(
  "notes/setEditingNoteIndex"
);
