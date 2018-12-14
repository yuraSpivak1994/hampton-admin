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
  public showUrl: boolean;
  public showImage: boolean;
  public popup = false;
  public cloneItemPortfolio: {
    media: {},
    description: '',
    title: '',
    date: '',
    id: '',
  };
  public portfolios = new AddPopupFields();
  public configs: any = {
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
  public trigerUploader() {
    if (this.hideRowField) {
      this.hideRowImage = true;
      this.hideRowField = false;
    } else {
      this.currentUploadedImage = null;
      this.hideRowImage = false;
      this.hideRowField = true;
    }
    this.getPortfolio();
    this.clearFieldsPopup();
  }
  public openEdit(item) {
    this.popup = true;
    this.portfolios = item;
    this.cloneItemPortfolio = item;
  }

  constructor(public userService: UserService) {
    super();
    this.hideRowField = true;
    this.hideRowImage = false;
    this.showUrl = false;
    this.showImage = true;
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
    this.userService.deletePortfolioItem(id).subscribe((res) => {
      this.getPortfolio();
    });
  }
  public addPortfolio() {
    this.portfolios.media = this.currentUploadedImage;
    this.userService.addPortfolio(this.portfolios).subscribe((res) => {
    }, err => {
      console.log('pezda yakas');
    });
  }
  public changePortfolio() {
    this.cloneItemPortfolio.media = this.currentUploadedImage;
    this.userService.updatePortfolio(this.cloneItemPortfolio)
      .subscribe((res) => {
      });
  }
  public get isImageAvailable(): boolean {
    return !!this.currentUploadedImage;
  }
  public  clearFieldsPopup() {
    // this.portfolios.media = '';
    // this.portfolios.title = '';
    // this.portfolios.description = '';
  }
  public toggleUploader() {
    if (this.showImage) {
      this.showUrl = true;
      this.showImage = false;
    } else {
      this.showUrl = false;
      this.showImage = true;
    }
  }

  public toggleImageToVideo(item) {
    const imageToVideo = new RegExp('(hamptonstudioblob.blob.core.windows.net\/images\/)');
    const response = imageToVideo.test(item);
    if (imageToVideo) {
      return !response;
    } else {
      return;
    }
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
