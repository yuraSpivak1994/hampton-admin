import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  public popupPrivacy = true;

  constructor() { }

  public trigerPopup() {
    if (this.popupPrivacy) {
      this.popupPrivacy = false;
    } else {
      this.popupPrivacy = true;
    }
  }

  ngOnInit() {
  }

}
