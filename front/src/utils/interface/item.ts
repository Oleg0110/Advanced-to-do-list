export interface IItem {
  id: string;
  name: string;
  noteId: string;
  mark: string | null;
  done: boolean;
}

export interface ItemState {
  items: IItem[];
  loading: boolean;
  error: null | string;
}
