import {Component, OnChanges, OnInit} from '@angular/core';
import {TextPageContent} from '../../../shared/models/user.model';
import {UserService} from '../../../shared/services/user.service';
import {UploadImg} from '../../../shared/classes/upload-image';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends UploadImg implements OnInit, OnChanges {

  public hideRowImage: boolean;
  public hideRowField: boolean;
  public configs: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarButtons: ['|', 'bold', '|', 'underline', 'strikeThrough', '|', '|', '|',
      'fontFamily', 'fontSize', 'color', '|', '|', 'paragraphStyle', 'lineHeight', '|', '|',
      '|', '|', '|', '|', '|', '|', '-', '|', '|', '-', '|',
      '|', '|', '|', '|', '|', '|',
      '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|']
  };
  public content: any;
  constructor(private userService: UserService) {
    super();
    this.hideRowField = true;
    this.hideRowImage = false;
  }
  public textContent = new TextPageContent();

  public trigerUploader() {
    if (this.hideRowField) {
      this.hideRowImage = true;
      this.hideRowField = false;
    } else {
      this.hideRowImage = false;
      this.hideRowField = true;
    }
  }


  private getText(): void {
    this.userService.getTextContent()
      .subscribe((data: TextPageContent) => {
        this.textContent =  data;
      });
  }
  public saveChanges() {
    this.userService.updateText(this.textContent).subscribe((res: any) => {
      this.getText();
    }, err => {
      alert(`ERORKA`);
    });
  }

  ngOnInit() {
    this.getText();
  }
  ngOnChanges() {
  }

  uploadResponse(file, type) {
    switch (type) {
      case 'topBlockMedia':
        this.textContent.topMediaBlock = file;
        break;
      case 'bottomBlockMedia':
        this.textContent.bottomMediaBlock = file;
        break;
    }
  }

}
