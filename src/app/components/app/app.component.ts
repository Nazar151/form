import {Component} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../service/user.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = {}

  constructor(private userService : UserService) {

  }
  search(): void {
    console.log(this.userService.getUserByIdOrName(this.user));

  }

}
