import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../store/auth/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    public authService: AuthService,    private store: Store,
  ) {




  }
  loginForm: FormGroup
  ngOnInit() {
    this.loginForm = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(6)])

    });

   }
   onSubmit() {
    let user = { email: this.loginForm.get("email").value, password:this.loginForm.get("password").value, loginStatus:null };
    this.store.dispatch(login({ user: user }));
   
   }


}