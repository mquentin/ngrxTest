import {User} from '../../models/user.model';

import {EntityState, createEntityAdapter} from '@ngrx/entity';

// Entity adapter
export const userAdapter = createEntityAdapter<User>();

export interface State extends EntityState<User> {
}

// Default data / initial state

const defaultUsers = {
  ids: ['1', '2', '3'],
  entities: {
    '1': {
      id: 1,
      name: 'name 1',
      email: 'email 1'
    },
    '2': {
      id: 2,
      name: 'name 2',
      email: 'email 2'
    },
    '3': {
      id: 3,
      name: 'name 3',
      email: 'email 3'
    }
  }
};

export const initialState: State = userAdapter.getInitialState(defaultUsers);
