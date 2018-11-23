import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public form: FormGroup;
  public username: object;
  public password: object;
  public userAutorization: object;


  constructor(private router: Router,
              private userService: UserService) {
    this.userAutorization = [
      {login: ''},
      {password: ''}
    ];

  }

  validateFields() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit() {
    this.userService.getHeader().next({isLogin: false});
    this.validateFields();
  }

  onSubmit(login, password) {
    this.userService.getUserByLogin(login, password).subscribe(res => {
      this.userService.setAuthData({
        token: res,
        role: 'admin'
      });
      this.userService.getHeader().next({isLogin: true});
      this.router.navigate(['./bio']);
    }, err => {
      this.router.navigate(['./login']);
    });
  }
}
