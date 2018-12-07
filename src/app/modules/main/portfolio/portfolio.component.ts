import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {AddPopupFields, PortfolioPageContent} from '../../../shared/models/user.model';
import {UploadImg} from '../../../shared/classes/upload-image';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent extends UploadImg implements OnInit {
  public currentUploadedImage: string;
  public portfolioContent = new PortfolioPageContent();
  public pageActual = 300;
  public hideRowImage: boolean;
  public hideRowField: boolean;
  public popup = false;
  public changeportfolio: any;
  public portfolios = new AddPopupFields();
  public configs: any = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarButtons: ['|', 'bold', '|', 'underline', 'strikeThrough', '|', '|', '|',
      'fontFamily', 'fontSize', 'color', '|', '|', 'paragraphStyle', 'lineHeight', '|', '|',
      '|', '|', '|', '|', '|', '|', '-', '|', '|', '-', '|',
      '|', '|', '|', '|', '|', '|',
      '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|']
  };
  public trigerUploader() {
    if (this.hideRowField) {
      this.hideRowImage = true;
      this.hideRowField = false;
    } else {
      this.currentUploadedImage = null;
      this.hideRowImage = false;
      this.hideRowField = true;
    }
  }
  public openEdit(item) {
    this.popup = true;
    this.portfolios = item;
    this.changeportfolio = item;
  }

  constructor(public userService: UserService) {
    super();
    this.hideRowField = true;
    this.hideRowImage = false;
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

  public addPortfolio() {
    this.portfolios.media = this.currentUploadedImage
    this.userService.addPortfolio(this.portfolios).subscribe((res) => {
    }, err => {
      console.log('pezda yakas');
    });
  }
  public changePortfolio() {
    this.changeportfolio.media = this.currentUploadedImage
    this.userService.updatePortfolio(this.changeportfolio)
      .subscribe((res) => {
      });
  }

  public get isImageAvailable(): boolean {
    return !!this.currentUploadedImage;
  }

  ngOnInit() {
    this.getPortfolio();
  }

  uploadResponse(file, type) {
    this.currentUploadedImage = file;
  }
}

/**
 * 1 завантажуємо картинку
 * 2 зберігаємо шлях до картинки (який нам прислав бекенд після її завантаження туди) в змінну
 * 3 заповнюємо решту інформації про портфоліо
 * 4 збираємо інформацію в модельку (тобто в обьєект з полями)
 * 5 добавляємо шлях картинки з кроку (2) в модельку з кроку 4.
 * 6 нажимаємо зберегти
 * 7 відправляємо на бекенд обьєект з інфою яку ми зібрали
 * 8 робимо getPortfolio тобто знову тягнемо всі портфоліо щоб обновити
 * 9 закриваємо адд портфоліо борк і відкриваємо список портфоліо
 */
