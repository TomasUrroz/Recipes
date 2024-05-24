import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  formS: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.formS = new FormGroup({
      email: new FormControl(null, [Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (!this.formS.valid) {
      return;
    }
    const email = this.formS.value['email'];
    const password = this.formS.value['password'];
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMsg) => {
        console.log(errorMsg);
        this.error = errorMsg;
        this.isLoading = false;
      }
    );
    this.formS.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
