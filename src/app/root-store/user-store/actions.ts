import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export enum ActionTypes {
  ADD_USER = '[USER] add user',
  REMOVE_USER = '[USER] remove user'
}

export class AddUserAction implements Action {
  readonly type = ActionTypes.ADD_USER;

  constructor(public payload: User) {
  }
}

export class RemoveUserAction implements Action {
  readonly type = ActionTypes.REMOVE_USER;

  constructor(public payload: number) {
  }
}


export type Actions = AddUserAction | RemoveUserAction;
