import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {TextPageContent} from '../../../shared/models/user.model';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  public policyContent = {
    description: '',
    id: '8534c49fg4'
  };

  public options: any = {
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
  constructor(private userService: UserService) { }

  private getPolicyContent(): void {
    this.userService.getPolicy()
      .subscribe((data: any) => {
        this.policyContent = data;
      });
  }

  public saveChanges() {
    this.userService.updatePolicy(this.policyContent).subscribe((res: any) => {
      this.getPolicyContent();
    }, err => {
      alert(`ERORKA`);
    });
  }
  ngOnInit() {
    this.getPolicyContent();
  }

}
