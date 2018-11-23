import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  ngOnInit() {

  }

  logOut() {
    this.userService.logOut();
  }

}
