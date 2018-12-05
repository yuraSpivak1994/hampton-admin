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
  public  portfolioContent = new PortfolioPageContent;

  constructor(private userService: UserService) {
    super();
  }

  private getPortfolio(): void {
    this.userService.getPortfolioContent()
      .subscribe((data: any) => {
        this.portfolioContent = data;
      }, err => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.getPortfolio();
  }

  uploadResponse(file, type) {
    this.portfolioContent.media = file;
  }
}
