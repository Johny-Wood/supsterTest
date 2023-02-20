import { createAction } from "@reduxjs/toolkit";

export const addNote = createAction<{ title: string; text: string; id: number; priority: 0 | 1 }>(
  "notes/addNote"
);

export const editNote = createAction<{ title: string; text: string; id: number; priority: 0 | 1 }>(
  "notes/editNote"
);

export const deleteNote = createAction<{ id: number }>(
  "notes/deleteNote"
);

export const setPriority = createAction<{ id: number, priority: 0 | 1 }>(
  "notes/setPriority"
);

export const setEditingNoteId = createAction<{ id: number | null }>(
  "notes/setEditingNoteIndex"
);

