export interface InitialState {
  list: {
    title: string;
    text: string;
  }[];
  editingNoteIndex: number | null;
}
