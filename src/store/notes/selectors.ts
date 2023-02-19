import { RootState } from "../store";

export const list = (state: RootState) => state.notes.list;
export const editingNoteIndex = (state: RootState) => state.notes.editingNoteIndex;
