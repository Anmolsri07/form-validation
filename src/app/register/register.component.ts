import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { FormService } from '../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  users: any;
  signup: FormGroup;
  submitted: boolean = false;
  constructor(
    private userData: FormService,
    private router: Router,
    private fb: FormBuilder
  ) {
    userData.Users().subscribe((result) => {
      console.log(result);
      this.users = result;
    });
  }
  ngOnInit(): void {
    this.signup = this.fb.group({
      fname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      lname: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('[a-zA-Z1-9]*'),
      ]),
      cpassword: new FormControl('', [Validators.required]),
    });
  }

  onsubmit(info: any) {
    console.log(this.signup.value);

    this.submitted = true;
    if (this.signup.valid) {
      this.userData.saveUser(info).subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {},
        () => {
          this.router.navigateByUrl('/register');
        }
      );
    } else {
      return;
    }
    console.log(this.signup.value);
  }
  get f() {
    console.log(this.signup.controls);

    return this.signup.controls;
  }

  get fname() {
    return this.signup.get('fname');
  }
  get lname() {
    return this.signup.get('lname');
  }
  get phone() {
    return this.signup.get('telephone');
  }
  get mail() {
    return this.signup.get('email');
  }
  get password() {
    return this.signup.get('password');
  }
  get cpassword() {
    return this.signup.get('cpassword');
  }
}
