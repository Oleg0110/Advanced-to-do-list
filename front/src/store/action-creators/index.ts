import * as NoteActionCreators from './note';
import * as ItemActionCreators from './item';

const actionCreators = {
  ...NoteActionCreators,
  ...ItemActionCreators,
};

export default actionCreators;
