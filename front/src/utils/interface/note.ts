export interface INote {
  id: string;
  name: string;
  mark: null | string;
}

export interface NoteState {
  notes: INote[];
  loading: boolean;
  addLoading: boolean;
  error: null | string;
}
