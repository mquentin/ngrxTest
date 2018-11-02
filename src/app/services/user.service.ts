import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';

import {User} from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<any>('https://randomuser.me/api/?inc=id,name,email')
      .pipe(
        map(objFromAPI => {
          const newDate: Date = new Date();
          const users: User[] = [{
            id: newDate.getTime(),
            name: objFromAPI.results[0].name.last,
            email: objFromAPI.results[0].email
          }];
          return users;
        })
      );
  }

}
