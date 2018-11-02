import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import {User} from '../../models/user.model';

import {State} from './state';

const getUser = (state: State): any => state.users;

export const selectUserState: MemoizedSelector<object, State> = createFeatureSelector<State>('user');

export const selectUserList: MemoizedSelector<object, User[]> = createSelector(selectUserState, getUser);
