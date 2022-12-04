import { IItem } from 'utils/interface/item';

export enum ItemActionTypes {
  FETCH_ITEMS = 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_ADD_ITEM = 'FETCH_ADD_ITEM',
  FETCH_ADD_ITEM_SUCCESS = 'FETCH_ADD_ITEM_SUCCESS',
  FETCH_DONE_ITEM = 'FETCH_DONE_ITEM',
  FETCH_DONE_ITEM_SUCCESS = 'FETCH_DONE_ITEM_SUCCESS',
  FETCH_DELETE_ITEM = 'FETCH_DELETE_ITEM',
  FETCH_DELETE_ITEM_SUCCESS = 'FETCH_DELETE_ITEM_SUCCESS',
  FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
}

interface FetchItemsAction {
  type: ItemActionTypes.FETCH_ITEMS;
}

interface FetchItemsSuccessAction {
  type: ItemActionTypes.FETCH_ITEMS_SUCCESS;
  payload: IItem[];
}

interface FetchAddItemAction {
  type: ItemActionTypes.FETCH_ADD_ITEM;
}

interface FetchAddItemSuccessAction {
  type: ItemActionTypes.FETCH_ADD_ITEM_SUCCESS;
  payload: IItem;
}

interface FetchDoneItemAction {
  type: ItemActionTypes.FETCH_DONE_ITEM;
}

interface FetchDoneItemSuccessAction {
  type: ItemActionTypes.FETCH_DONE_ITEM_SUCCESS;
  payload: IItem;
}

interface FetchDeleteItemAction {
  type: ItemActionTypes.FETCH_DELETE_ITEM;
}

interface FetchDeleteItemSuccessAction {
  type: ItemActionTypes.FETCH_DELETE_ITEM_SUCCESS;
  payload: string;
}

interface FetchItemsErrorAction {
  type: ItemActionTypes.FETCH_ITEMS_ERROR;
  payload: string;
}

export type ItemAction =
  | FetchItemsAction
  | FetchItemsSuccessAction
  | FetchAddItemAction
  | FetchAddItemSuccessAction
  | FetchItemsErrorAction
  | FetchDeleteItemAction
  | FetchDeleteItemSuccessAction
  | FetchDoneItemAction
  | FetchDoneItemSuccessAction;
