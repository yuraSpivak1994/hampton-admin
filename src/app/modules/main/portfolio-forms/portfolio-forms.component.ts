import {Component, OnInit} from '@angular/core';
import {UploadImg} from '../../../shared/classes/upload-image';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-portfolio-forms',
  templateUrl: './portfolio-forms.component.html',
  styleUrls: ['./portfolio-forms.component.scss']
})
export class PortfolioFormsComponent extends UploadImg implements OnInit {
  public item: any;
  public configs: any = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarButtons: ['|', 'bold', '|', 'underline', 'strikeThrough', '|', '|', '|',
      'fontFamily', 'fontSize', 'color', '|', '|', 'paragraphStyle', 'lineHeight', '|', '|',
      '|', '|', '|', '|', '|', '|', '-', '|', '|', '-', '|',
      '|', '|', '|', '|', '|', '|',
      '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|']
  };

  constructor(private userService: UserService) {
    super();
    this.item = {
      media: '',
      description: '',
      title: '',
      date: null
    };
  }

  save(item) {
    this.userService.addPortfolio(item);
  }

  ngOnInit() {
  }
  uploadResponse(file, type) {
    this.item.media = file;
  }

}
