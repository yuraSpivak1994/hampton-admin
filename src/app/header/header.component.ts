import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogin: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getHeader().subscribe(res => {
      this.isLogin = res.isLogin;
    });
  }

}
