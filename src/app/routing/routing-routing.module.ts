import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioComponent} from "../bio/bio.component";
import {PrivacyPolicyComponent} from "../privacy-policy/privacy-policy.component";
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {TextComponent} from "../text/text.component";
import {AuthorizationComponent} from "../authorization/authorization.component";

const routes: Routes = [
  {path: 'bio', component: BioComponent},
  {path: 'text', component: TextComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'login', component: AuthorizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
