import { createAction } from "@reduxjs/toolkit";

export const addNote = createAction<{ title: string; text: string }>(
  "notes/addNote"
);
