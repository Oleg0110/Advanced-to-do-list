import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { ItemAction, ItemActionTypes } from 'utils/types/item';

export const fetchItems =
  (noteId: string) => async (dispatch: Dispatch<ItemAction>) => {
    try {
      dispatch({ type: ItemActionTypes.FETCH_ITEMS });
      const res = await axios.get(
        `http://localhost:5000/items?noteId=${noteId}`
      );

      setTimeout(() => {
        dispatch({
          type: ItemActionTypes.FETCH_ITEMS_SUCCESS,
          payload: res.data,
        });
      }, 500);
    } catch (error) {
      const err = error as AxiosError;

      dispatch({
        type: ItemActionTypes.FETCH_ITEMS_ERROR,
        payload: err.message,
      });
    }
  };

export const fetchAddItem =
  (itemName: string, noteId: string) =>
  async (dispatch: Dispatch<ItemAction>) => {
    try {
      dispatch({ type: ItemActionTypes.FETCH_ADD_ITEM });
      const res = await axios.post('http://localhost:5000/items', {
        name: itemName,
        noteId,
      });

      setTimeout(() => {
        dispatch({
          type: ItemActionTypes.FETCH_ADD_ITEM_SUCCESS,
          payload: res.data,
        });
      }, 500);
    } catch (error) {
      const err = error as AxiosError;

      dispatch({
        type: ItemActionTypes.FETCH_ITEMS_ERROR,
        payload: err.message,
      });
    }
  };

export const fetchDoneItem =
  (id: string, doneStatus: boolean) =>
  async (dispatch: Dispatch<ItemAction>) => {
    try {
      dispatch({ type: ItemActionTypes.FETCH_DONE_ITEM });
      const res = await axios.patch(`http://localhost:5000/items/${id}`, {
        id,
        done: doneStatus,
      });

      setTimeout(() => {
        dispatch({
          type: ItemActionTypes.FETCH_DONE_ITEM_SUCCESS,
          payload: res.data,
        });
      }, 500);
    } catch (error) {
      const err = error as AxiosError;

      dispatch({
        type: ItemActionTypes.FETCH_ITEMS_ERROR,
        payload: err.message,
      });
    }
  };

export const fetchDeleteItem =
  (id: string) => async (dispatch: Dispatch<ItemAction>) => {
    try {
      dispatch({ type: ItemActionTypes.FETCH_DELETE_ITEM });
      const res = await axios.delete(`http://localhost:5000/items/${id}`);

      res.data &&
        setTimeout(() => {
          dispatch({
            type: ItemActionTypes.FETCH_DELETE_ITEM_SUCCESS,
            payload: id,
          });
        }, 500);
    } catch (error) {
      const err = error as AxiosError;

      dispatch({
        type: ItemActionTypes.FETCH_ITEMS_ERROR,
        payload: err.message,
      });
    }
  };
