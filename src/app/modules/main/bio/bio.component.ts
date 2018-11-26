import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  public hidePopup = true;
  public getFormBio: FormGroup;
  public text: string;
  public fieldPinkBlock: string;


  public disabledSaveBtn: boolean;

  constructor(private userService: UserService) {

    this.disabledSaveBtn = false;
  }

  public editBio() {
    if (this.hidePopup) {
      this.hidePopup = false;
    } else {
      this.hidePopup = true;
    }
  }

  validFields() {
    debugger;
    if (!this.fieldPinkBlock) {
      this.disabledSaveBtn = true;
    }
  }

  getFormSubmit() {
    this.getFormBio = new FormGroup({
      'pinkBlock': new FormControl(null, [Validators.required]),
      'whiteBlock': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.userService.getBioContent()
      .subscribe(data => {
        console.log(data);
      });
    this.validFields();
  }

  ngOnInit() {
    this.getFormSubmit();
    this.validFields();
  }
}

