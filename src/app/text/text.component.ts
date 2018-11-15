import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  public hidePopupImage = true;
  public hidePopupField = true;

  constructor() { }

  public trigerPopupimage() {
    if (this.hidePopupImage) {
      this.hidePopupImage = false;
    } else {
      this.hidePopupImage = true;
    }
  }
  public trigerPopupfield() {
    if (this.hidePopupField) {
      this.hidePopupField = false;
    } else {
      this.hidePopupField = true;
    }
  }

  ngOnInit() {
  }

}
