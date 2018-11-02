import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function userReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      action.payload.id = Math.max.apply(Math, state.users.map(({ id }) => id)) + 1;
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case ActionTypes.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    default: {
      return state;
    }
  }
}
