import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {PortfolioPageContent} from '../../../shared/models/user.model';
import {UploadImg} from '../../../shared/classes/upload-image';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent extends UploadImg implements OnInit {
  public portfolioContent = new PortfolioPageContent;
  public pageActual = 30;

  constructor(public userService: UserService) {
    super();
  }

  private getPortfolio(): void {
    this.userService.getPortfolioContent(this.pageActual)
      .subscribe((data: any) => {
        this.portfolioContent.portfolios = data.portfolios;
      }, err => {
        console.log(err);
      });
  }
  public deletePortfolio(id) {
    this.userService.deletePortfolioItem(id).subscribe(() => {
      this.getPortfolio();
    });
  }

  ngOnInit() {
    this.getPortfolio();
  }

  uploadResponse(file, type) {
    this.portfolioContent.portfolios = file;
    console.log(file);

  }
}
