import axios from 'axios';
import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { NoteAction, NoteActionTypes } from 'utils/types/note';

export const fetchNotes = () => async (dispatch: Dispatch<NoteAction>) => {
  try {
    dispatch({ type: NoteActionTypes.FETCH_NOTES });
    const res = await axios.get('http://localhost:5000/notes');
    setTimeout(() => {
      dispatch({
        type: NoteActionTypes.FETCH_NOTES_SUCCESS,
        payload: res.data,
      });
    }, 500);
  } catch (error) {
    const err = error as AxiosError;

    dispatch({
      type: NoteActionTypes.FETCH_NOTES_ERROR,
      payload: err.message,
    });
  }
};

export const fetchAddNote =
  (noteName: string) => async (dispatch: Dispatch<NoteAction>) => {
    try {
      dispatch({ type: NoteActionTypes.FETCH_ADD_NOTE });
      const res = await axios.post('http://localhost:5000/notes', {
        name: noteName,
      });

      return dispatch({
        type: NoteActionTypes.FETCH_ADD_NOTE_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      const err = error as AxiosError;

      return dispatch({
        type: NoteActionTypes.FETCH_NOTES_ERROR,
        payload: err.message,
      });
    }
  };

export const fetchDeleteNote = (id: string) => {
  return async (dispatch: Dispatch<NoteAction>) => {
    try {
      dispatch({ type: NoteActionTypes.FETCH_DELETE_NOTE });
      const res = await axios.delete(`http://localhost:5000/notes/${id}`);

      res.data &&
        setTimeout(() => {
          dispatch({
            type: NoteActionTypes.FETCH_DELETE_NOTE_SUCCESS,
            payload: id,
          });
        }, 500);
    } catch (error) {
      const err = error as AxiosError;

      dispatch({
        type: NoteActionTypes.FETCH_NOTES_ERROR,
        payload: err.message,
      });
    }
  };
};
