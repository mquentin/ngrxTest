import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {User} from '../models/user.model';

import {UserService} from '../services/user.service';

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

  usersTestFormService: User[];

  constructor(private store$: Store<RootStoreState.State>, private userService: UserService) {
  }

  ngOnInit() {
    this.store$.dispatch(new UserStoreActions.LoadUserAction());

    this.users$ = this.store$.select(UserStoreSelectors.selectAll);

    this.userService.getUsers().subscribe(obj => {
      this.usersTestFormService = obj;
    });
  }

  appendTextToUserName(id, name, appendText) {
    const newName: string = name + appendText;
    this.store$.dispatch(new UserStoreActions.UpdateUserAction(id, {name: newName}));
  }

  delUser(id) {
    this.store$.dispatch(new UserStoreActions.RemoveUserAction(id));
  }

}
