import {Component} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../service/user.service";
import {NgForm} from "@angular/forms";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = {}

  users: User[];


  constructor(private userService : UserService) {
  }


  search() {
    this.userService.getUsers().subscribe(values => {
     const filterUsers = this.userService.filterUsers(values, this.user)
      this.users = filterUsers
      console.log(this.users)

    });
  }

  xxx(myForm: NgForm) {
    console.log(myForm.controls.id.value)
    console.log(myForm.controls.name.value)
  }
}
