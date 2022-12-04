import { ItemState } from 'utils/interface/item';
import { ItemAction, ItemActionTypes } from 'utils/types/item';

const initialState: ItemState = {
  items: [],
  loading: false,
  error: null,
};

export const itemReducer = (
  state = initialState,
  action: ItemAction
): ItemState => {
  switch (action.type) {
    case ItemActionTypes.FETCH_ITEMS:
      return { loading: true, error: null, items: [] };
    case ItemActionTypes.FETCH_ITEMS_SUCCESS:
      return { loading: false, error: null, items: action.payload };

    case ItemActionTypes.FETCH_ADD_ITEM:
      return { loading: true, error: null, items: state.items };
    case ItemActionTypes.FETCH_ADD_ITEM_SUCCESS:
      return {
        loading: false,
        error: null,
        items: [...state.items, action.payload],
      };

    case ItemActionTypes.FETCH_DONE_ITEM:
      return { ...state, error: null, items: state.items };
    case ItemActionTypes.FETCH_DONE_ITEM_SUCCESS:
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const newArr = [...state.items];
      newArr[itemIndex].done = action.payload.done;

      return {
        ...state,
        error: null,
        items: newArr,
      };

    case ItemActionTypes.FETCH_DELETE_ITEM:
      return { loading: true, error: null, items: state.items };
    case ItemActionTypes.FETCH_DELETE_ITEM_SUCCESS:
      return {
        loading: false,
        error: null,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ItemActionTypes.FETCH_ITEMS_ERROR:
      return { loading: false, error: action.payload, items: [] };

    default:
      return state;
  }
};
