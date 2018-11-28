import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  public hideRowImage: boolean;
  public hideRowField: boolean
  public form: FormGroup;
  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarButtons: ['|', 'bold', '|', 'underline', 'strikeThrough', '|', '|', '|',
      'fontFamily', 'fontSize', 'color', '|', '|', 'paragraphStyle', 'lineHeight', '|', '|',
      '|', '|', '|', '|', '|', '|', '-', '|', '|', '-', '|',
      '|', '|', '|', '|', '|', '|',
      '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|']
  };
  public content: any;
  constructor() {
    this.hideRowField = true;
    this.hideRowImage = false;
    this.content = {
      urlFirst: '',
      description: '',
      urlSecond: ''
    };
  }

  validateFields() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
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
  public test() {
    console.log(this.content);
  }

  ngOnInit() {
    this.validateFields();
  }

}
