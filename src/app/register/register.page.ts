import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credentials: FormGroup;

  /*username: string;
  email: string;
  password: string;
  confpassword: string;*/

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public fireAuth: AngularFireAuth) { }

    ngOnInit() {
      this.credentials = this.fb.group({
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confpassword: ['', [Validators.required, Validators.minLength(6)]],
      })
    }

  get username() {
    return this.credentials.get("username");
  }

  get email() {
    return this.credentials.get("email");
  }

  get password() {
    return this.credentials.get("password");
  }

  get confpassword() {
    return this.credentials.get("confpassword");
  }

  register() {
    this.fireAuth.createUserWithEmailAndPassword (
    this.email.value, this.password.value)
      .then ((res) => {
        if (res.user) {this.router.navigate(["login"]);}
      }).catch((err) => {
        let msg = err.message;
    
    })
  }


}
