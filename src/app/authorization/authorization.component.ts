import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public signIn() {
    this.auth.authorize(this.username, this.password)
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.router.navigate(['bio']);
        } else {
          alert('WRONG CREDENTIALS!!!!!!!!')
        }
      });
  }
}
