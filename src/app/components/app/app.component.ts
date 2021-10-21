import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../models/User";
import {NgModel} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user : User = {
    id: 1,
    name: 'Nazar'
  }

  constructor(private userService : UserService) {

  }


  save(id: NgModel, name: NgModel):void {
    console.log(id)
  }
}
