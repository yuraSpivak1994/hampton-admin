export class TextPageContent {

  title: string;
  topMediaBlock: any;
  description: string;
  bottomMediaBlock: any;

constructor() {
  }
}
export class PortfolioPageContent {
  portfolioCount: number;
  portfolios: Array<Portfolio>;
}

class Portfolio {
  media: string;
  description: string;
  title: string;
  date: any;
  id?: any;
}
export class AddPopupFields {
  media: string;
  description: string;
  title: string;
  date: any;
  id?: any;
}
