import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  public options: any = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarButtons: ['|', 'bold', '|', 'underline', 'strikeThrough', '|', '|', '|',
      'fontFamily', 'fontSize', 'color', '|', '|', 'paragraphStyle', 'lineHeight', '|', '|',
      '|', '|', '|', '|', '|', '|', '-', '|', '|', '-', '|',
      '|', '|', '|', '|', '|', '|',
      '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|']
  };
  constructor(private userService: UserService) { }


  ngOnInit() {
  }

}
