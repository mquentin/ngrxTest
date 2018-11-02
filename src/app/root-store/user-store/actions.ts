import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export enum ActionTypes {
  ADD_USER = '[USER] add user',
  UPDATE_USER = '[USER] update user',
  REMOVE_USER = '[USER] remove user'
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


export type Actions = AddUserAction | UpdateUserAction | RemoveUserAction;
