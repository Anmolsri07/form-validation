import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  users: any;
  constructor(private userData: FormService, private router: Router) {
    userData.Users().subscribe((result) => {
      console.log(result);
      this.users = result;
    });
  }

  signin = new FormGroup({
    username: new FormControl('', [
      Validators.required,

      Validators.pattern('[A-Za-z0-9@.]*'),
    ]),
    pword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onsubmit(info: any) {
    // console.log(this.signin.value);
    this.userData.saveUser(info).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {},
      () => {
        this.router.navigateByUrl('/LoginSuccess');
      }
    );
  }
  get user() {
    return this.signin.get('username');
  }
  get password() {
    return this.signin.get('pword');
  }
}
