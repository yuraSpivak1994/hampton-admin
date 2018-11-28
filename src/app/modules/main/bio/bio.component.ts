import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit, OnChanges {

  public hidePopup = true;
  public text: string;
  public fieldPinkBlock: string;
  public fieldWhiteBlock: string
  public contentBio: any;
  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarButtons: ['|', 'bold', '|', 'underline', 'strikeThrough', '|', '|', '|',
      'fontFamily', 'fontSize', 'color', '|', '|', 'paragraphStyle', 'lineHeight', '|', '|',
      '|', '|', '|', '|', '|', '|', '-', '|', '|', '-', '|',
      '|', '|', '|', '|', '|', '|',
      '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|']
  }


  public disabledSaveBtn: boolean;

  constructor(private userService: UserService) {

    this.disabledSaveBtn = false;
    this.contentBio = {
      pinkBlockText: '',
      whiteBlockText: ''
    };
  }

  public editBio() {
    if (this.hidePopup) {
      this.hidePopup = false;
    } else {
      this.hidePopup = true;
    }
  }
  innerTextInPinkBlock(data) {
    this.contentBio.pinkBlockText = data.pinkBlockText;
    this.contentBio.whiteBlockText = data.whiteBlockText;
    console.log(this.contentBio);
  }

  public saveChanges(contentBio) {
    this.userService.editBioContent(contentBio).subscribe((res: any) => {
      this.contentBio.pinkBlockText = res.pinkBlockText;
      this.contentBio.whiteBlockText = res.whiteBlockText;
    }, err => {
    });
  }

  ngOnInit() {
    this.userService.getBioContent()
      .subscribe(data => {
    this.innerTextInPinkBlock(data);
        console.log(data);
      });
  }
  ngOnChanges() {

  }
}

