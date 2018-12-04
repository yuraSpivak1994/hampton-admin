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
      '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|'],
    htmlAllowedTags: ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo',
      'blockquote', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'datalist', 'dd',
      'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure',
      'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'i', 'iframe', 'img',
      'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem',
      'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', '-', 'progress', 'queue',
      'rp', 'rt', 'ruby', 's', 'samp', 'script', 'style', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong',
      'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track',
      'u', 'ul', 'var', 'video', 'wbr']
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
        this.textContent = data;
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
