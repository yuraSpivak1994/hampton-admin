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
  portfolios: [{
    media: any;
    description: string;
    title: string;
    date: any;
  }]
  constructor(){}
}
