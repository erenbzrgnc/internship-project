import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) {}
  loginForm: FormGroup
  ngOnInit() {
    this.loginForm = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(6)])

    });

   }
   onSubmit() {
     this.authService.SignIn(this.loginForm.get("email").value, this.loginForm.get("password").value)
    
   }


}