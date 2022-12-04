import { INote } from 'utils/interface/note';

export enum NoteActionTypes {
  FETCH_NOTES = 'FETCH_NOTES',
  FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS',
  FETCH_ADD_NOTE = 'FETCH_ADD_NOTE',
  FETCH_ADD_NOTE_SUCCESS = 'FETCH_ADD_NOTE_SUCCESS',
  FETCH_DELETE_NOTE = 'FETCH_DELETE_NOTE',
  FETCH_DELETE_NOTE_SUCCESS = 'FETCH_DELETE_NOTE_SUCCESS',
  FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR',
}

interface FetchNotesAction {
  type: NoteActionTypes.FETCH_NOTES;
}

interface FetchNotesSuccessAction {
  type: NoteActionTypes.FETCH_NOTES_SUCCESS;
  payload: INote[];
}

interface FetchAddNoteAction {
  type: NoteActionTypes.FETCH_ADD_NOTE;
}

interface FetchAddNoteSuccessAction {
  type: NoteActionTypes.FETCH_ADD_NOTE_SUCCESS;
  payload: INote;
}

interface FetchDeleteNoteAction {
  type: NoteActionTypes.FETCH_DELETE_NOTE;
}

interface FetchDeleteNoteSuccessAction {
  type: NoteActionTypes.FETCH_DELETE_NOTE_SUCCESS;
  payload: string;
}

interface FetchNotesErrorAction {
  type: NoteActionTypes.FETCH_NOTES_ERROR;
  payload: string;
}

export type NoteAction =
  | FetchNotesAction
  | FetchNotesSuccessAction
  | FetchNotesErrorAction
  | FetchAddNoteAction
  | FetchAddNoteSuccessAction
  | FetchDeleteNoteAction
  | FetchDeleteNoteSuccessAction;
