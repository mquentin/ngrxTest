import {User} from '../../models/user.model';

export interface State {
  users: User[];
};

export const initialState: State = {
  users: [{
    id: 1,
    name: 'name 1',
    email: 'email 1'
  }, {
    id: 2,
    name: 'name 2',
    email: 'email 2'
  }, {
    id: 3,
    name: 'name 3',
    email: 'email 3'
  }]
};
