import {createFeatureSelector} from '@ngrx/store';

import {userAdapter, State} from './state';


export const getUserState = createFeatureSelector<State>('user');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = userAdapter.getSelectors(getUserState);
