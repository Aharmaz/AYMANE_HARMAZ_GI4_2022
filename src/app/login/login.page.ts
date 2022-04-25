import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: FormGroup;

  /*email: string;
  password: string;*/

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public fireAuth: AngularFireAuth,
    ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get email() {
    return this.credentials.get("email");
  }

  get password() {
    return this.credentials.get("password");
  }

  login() {
    this.fireAuth.signInWithEmailAndPassword(
    this.email.value, this.password.value)
      .then ((res) => {
        if (res.user) {this.router.navigate(["home"]);}
      }).catch((err) => {
        let msg = err.message;
    
    })
  }

}
