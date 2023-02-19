import { RootState } from "../store";

export const list = (state: RootState) => state.notes.list;
export const editingNoteId = (state: RootState) => state.notes.editingNoteId;
