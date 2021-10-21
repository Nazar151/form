import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../models/User";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  id = 0;

  user: User

  constructor(private userService : UserService) {

  }


  getUser(): void {
    this.userService.getUser(this.id).subscribe(value => console.log(value))
  }

  checkRefId(x: HTMLInputElement): void {
    console.log(x)
  }
}
