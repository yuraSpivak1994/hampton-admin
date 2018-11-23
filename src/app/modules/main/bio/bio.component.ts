import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  public hidePopup = true;

  constructor() { }

  public editBio() {
    if (this.hidePopup) {
      this.hidePopup = false;
    } else {
      this.hidePopup = true;
    }
  }

  ngOnInit() {
  }
}

