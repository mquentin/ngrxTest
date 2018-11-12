import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';

import * as userActions from './actions';
import {UserService} from '../../services/user.service';


@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private us: UserService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUserAction>(
      userActions.ActionTypes.LOAD_USER
    ),
    switchMap(action =>
      this.us.getUsers()
        .pipe(
          map(
            users =>
              new userActions.AddUserAction(users[0])
          ),
          catchError(error =>
            of(new userActions.LoadUserFailAction(error))
          )
        )
    )
  );
}
