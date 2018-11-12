import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export enum ActionTypes {
  ADD_USER = '[USER] add user',
  UPDATE_USER = '[USER] update user',
  REMOVE_USER = '[USER] remove user',
  LOAD_USER = '[USER] load user',
  LOAD_USER_SUCCESS = '[USER] load user success',
  LOAD_USER_FAIL = '[USER] load user fail',
}

export class AddUserAction implements Action {
  readonly type = ActionTypes.ADD_USER;

  constructor(public user: User) {
  }
}

export class UpdateUserAction implements Action {
  readonly type = ActionTypes.UPDATE_USER;

  constructor(public id: number, public changes: Partial<User>) {
  }
}


export class RemoveUserAction implements Action {
  readonly type = ActionTypes.REMOVE_USER;

  constructor(public id: number) {
  }
}

export class LoadUserAction implements Action {
  readonly type = ActionTypes.LOAD_USER;

  constructor() {
  }
}

export class LoadUserSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_USER_SUCCESS;

  constructor(public user: User) {
  }
}

export class LoadUserFailAction implements Action {
  readonly type = ActionTypes.LOAD_USER_FAIL;

  constructor(public error: String) {
  }
}


//https://www.youtube.com/watch?v=xkUOQeGqIGI&list=PLW2eQOsUPlWJRfWGOi9gZdc3rE4Fke0Wv&index=11

export type Actions = AddUserAction | UpdateUserAction | RemoveUserAction | LoadUserAction | LoadUserSuccessAction | LoadUserFailAction;
