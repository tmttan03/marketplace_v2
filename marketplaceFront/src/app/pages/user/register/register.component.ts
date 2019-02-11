import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserApiService]
})


export class RegisterComponent implements OnInit {

  register;
  message;
  constructor(private userService: UserApiService) { }

  ngOnInit() {
    this.register = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: ''
    };
  }

  registerUser(){
    this.userService.registerAUser(this.register).subscribe(
      response => {
        this.message = 'Your account has been created! You are now able to login.' 
        this.register.reset();
      },
      error => console.log('error', error)
    );
  }


}


