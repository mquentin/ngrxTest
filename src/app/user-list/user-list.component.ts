import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {User} from '../models/user.model';

import {
  RootStoreState,
  UserStoreActions,
  UserStoreSelectors
} from '../root-store';

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
    this.users$ = this.store$.select(UserStoreSelectors.selectUserList);
  }

  delUser(id) {
    this.store$.dispatch(new UserStoreActions.RemoveUserAction(id));
  }

}
