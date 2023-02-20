export interface InitialState {
  list: {
    title: string;
    text: string;
    priority: 0 | 1;
    id: number;
  }[];
  editingNoteId: number | null;
}
