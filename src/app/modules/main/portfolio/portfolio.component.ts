import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public options: any = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarButtons: ['|', 'bold', '|', 'underline', 'strikeThrough', '|', '|', '|',
      'fontFamily', 'fontSize', 'color', '|', '|', 'paragraphStyle', 'lineHeight', '|', '|',
      '|', '|', '|', '|', '|', '|', '-', '|', '|', '-', '|',
      '|', '|', '|', '|', '|', '|',
      '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|']
  };
  public hideRowImage: boolean;
  public hideRowField: boolean;
  public popup = false;

  constructor() {
    this.hideRowField = true;
    this.hideRowImage = false;
  }
  public trigerUploader() {
    if (this.hideRowField) {
      this.hideRowImage = true;
      this.hideRowField = false;
    } else {
      this.hideRowImage = false;
      this.hideRowField = true;
    }
  }

  ngOnInit() {
  }

}
