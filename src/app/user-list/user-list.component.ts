import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {User} from '../models/user.model';

import {
  RootStoreState,
  UserStoreActions,
  UserStoreSelectors
} from '../root-store';
import {UpdateUserAction} from '../root-store/user-store/actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.users$ = this.store$.select(UserStoreSelectors.selectAll);
  }

  appendTextToUserName(id, name, appendText) {
    const newName: string = name + appendText;
    this.store$.dispatch(new UserStoreActions.UpdateUserAction(id, {name: newName}));
  }

  delUser(id) {
    this.store$.dispatch(new UserStoreActions.RemoveUserAction(id));
  }

}
