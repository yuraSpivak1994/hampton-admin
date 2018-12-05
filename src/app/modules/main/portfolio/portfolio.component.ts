import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {PortfolioPageContent} from '../../../shared/models/user.model';
import {UploadImg} from '../../../shared/classes/upload-image';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent  extends UploadImg  implements OnInit {
  public configs: any = {
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
  public  portfolioContent = new PortfolioPageContent();
  public trigerUploader() {
    if (this.hideRowField) {
      this.hideRowImage = true;
      this.hideRowField = false;
    } else {
      this.hideRowImage = false;
      this.hideRowField = true;
    }
  }

  constructor(private userService: UserService) {
    super();
    this.hideRowField = true;
    this.hideRowImage = false;
    // this.portfolioContent.date = new Date(this.portfolioContent.date);
  }

  private getPortfolio(): void {
    this.userService.getPortfolioContent()
      .subscribe((data: PortfolioPageContent) => {
        this.portfolioContent = data;
        console.log(data)
      }, err => {
        console.log(err);
      });
  }
  public postPortfolio() {
    this.userService.addPortfolio(this.portfolioContent).subscribe((res: any) => {
      this.getPortfolio();
    }, err => {
      alert(`ERORKA`);
      console.log(err);
    });
  }
  ngOnInit() {
    this.getPortfolio();
  }

  uploadResponse(file, type) {
    this.portfolioContent.media = file;
  }

  // transformDate(date) {
  //   this.portfolioContent.date = new Date(date);
  // }

}
