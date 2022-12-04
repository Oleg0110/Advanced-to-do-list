import { NoteState } from 'utils/interface/note';
import { NoteAction, NoteActionTypes } from 'utils/types/note';

const initialState: NoteState = {
  notes: [],
  loading: false,
  addLoading: false,
  error: null,
};

export const noteReducer = (
  state = initialState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case NoteActionTypes.FETCH_NOTES:
      return {
        ...state,
        loading: true,
        error: null,
        notes: [],
      };
    case NoteActionTypes.FETCH_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        notes: action.payload,
      };

    case NoteActionTypes.FETCH_ADD_NOTE:
      return {
        ...state,
        addLoading: true,
        error: null,
        notes: state.notes,
      };
    case NoteActionTypes.FETCH_ADD_NOTE_SUCCESS:
      return {
        ...state,
        addLoading: false,
        error: null,
        notes: [...state.notes, action.payload],
      };

    case NoteActionTypes.FETCH_DELETE_NOTE:
      return {
        ...state,
        addLoading: true,
        error: null,
        notes: state.notes,
      };
    case NoteActionTypes.FETCH_DELETE_NOTE_SUCCESS:
      return {
        ...state,
        addLoading: false,
        error: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case NoteActionTypes.FETCH_NOTES_ERROR:
      return {
        ...state,
        addLoading: false,
        loading: false,
        error: action.payload,
        notes: [],
      };

    default:
      return state;
  }
};
