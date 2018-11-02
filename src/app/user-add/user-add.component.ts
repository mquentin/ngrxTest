import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {
  RootStoreState,
  UserStoreActions
} from '../root-store';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private store$: Store<RootStoreState.State>) {
  }

  addUser(name, email) {
    const newDate: Date = new Date();
    this.store$.dispatch(new UserStoreActions.AddUserAction({id: newDate.getTime(), name: name, email: email}));
  }

  ngOnInit() {
  }

}
