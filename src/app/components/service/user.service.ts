import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient : HttpClient) { }

  getUserById(id: number): Observable<User> {
    return  this.httpClient.get<User>(this.url + '/' + id)
  }

  getUserByIdOrName(user: User): User[] {
    this.httpClient.get<User[]>(this.url)
      .subscribe( value => {
        const result = value.filter(user => user.id === user.id || user.name?.toLowerCase().includes(user.name.toLowerCase()))
        this.users = result
      });
  return this.users
  }

}
