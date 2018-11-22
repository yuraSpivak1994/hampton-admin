import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  public form: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
  }
  onSubmit() {
    console.log(this.form);
  }

  // public signIn() {
  //   this.auth.authorize(this.username, this.password)
  //     .subscribe((isConfirmed) => {
  //       if (isConfirmed) {
  //         this.router.navigate(['header']);
  //       } else {
  //         alert('WRONG CREDENTIALS!!!!!!!!');
  //       }
  //     });
  // }
}
