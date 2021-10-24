import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  users: User[];

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient : HttpClient) { }

  getUserById(id: number): Observable<User> {
    return  this.httpClient.get<User>(this.url + '/' + id)
  }

  getUsersByIdOrName(user: User): Observable <User[]> {
   return this.httpClient.get<User[]>(this.url)
  }

  // @ts-ignore
  filterUsers(users: User[], user) : User[]{
    return users.filter(value => value.id === user.id || value.name?.toLowerCase().includes(user.name.toLowerCase()))
  };


}
