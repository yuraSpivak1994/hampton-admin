import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  public hidePopup = true;
  public  getFormBio: FormGroup;

  constructor(private userService: UserService) {}

  public editBio() {
    if (this.hidePopup) {
      this.hidePopup = false;
    } else {
      this.hidePopup = true;
    }
  }
  getFormSubmit() {
    this.getFormBio = new FormGroup({
      'pinkBlock': new FormControl(null, [Validators.required]),
      'whiteBlock': new FormControl(null, [Validators.required])
    });
  }
  ngOnInit() {
    this.getFormSubmit();
  }
}

