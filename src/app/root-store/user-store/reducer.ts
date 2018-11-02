import {Actions, ActionTypes} from './actions';
import {initialState, userAdapter, State} from './state';

export function userReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return userAdapter.addOne(action.user, state);
    case ActionTypes.UPDATE_USER:
      return userAdapter.updateOne({
        id: action.id,
        changes: action.changes,
      }, state);
    case ActionTypes.REMOVE_USER:
      return userAdapter.removeOne(action.id, state);
    default: {
      return state;
    }
  }
}
