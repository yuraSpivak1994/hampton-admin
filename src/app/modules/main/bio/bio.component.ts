import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit, OnChanges {

  public text: string;
  public contentBio: any = {
    pinkBlockText: '',
    whiteBlockText: '',
  };


  public options: any = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarButtons: ['|', 'bold', '|', 'underline', 'strikeThrough', '|', '|', '|',
      'fontFamily', 'fontSize', 'color', '|', '|', 'paragraphStyle', 'lineHeight', '|', '|',
      '|', '|', '|', '|', '|', '|', '-', '|', '|', '-', '|',
      '|', '|', '|', '|', '|', '|',
      '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|']
  };
  public disabledSaveBtn: boolean;

  constructor(private userService: UserService) {

    this.disabledSaveBtn = false;
  }

  public saveChanges() {
    this.userService.updateBio(this.contentBio).subscribe((res: any) => {
      this.getBio();
    }, err => {
      alert(`ERORKA BLYAT`);
    });
  }

  ngOnInit() {
    this.getBio();
  }

  private getBio(): void {
    this.userService.getBioContent()
      .subscribe(data => {
        this.contentBio = data;
      });
  }

  ngOnChanges() {

  }
}

