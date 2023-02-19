export interface InitialState {
  list: {
    title: string;
    text: string;
    id: number;
  }[];
  editingNoteId: number | null;
}
