import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioComponent} from '../modules/main/bio/bio.component';
import {TextComponent} from '../modules/main/text/text.component';
import {PrivacyPolicyComponent} from '../modules/main/privacy-policy/privacy-policy.component';
import {AuthorizationComponent} from '../modules/authorization/authorization.component';
import {PortfolioComponent} from '../modules/main/portfolio/portfolio.component';
import {MainComponent} from '../modules/main/main.component';
import {UserGuard} from '../shared/guards/user.guard';
import {PortfolioFormsComponent} from '../modules/main/portfolio-forms/portfolio-forms.component';


const routes: Routes = [
  {path: '', redirectTo: '/main/bio', pathMatch: 'full'},
  {path: 'login', component: AuthorizationComponent},
  {path: 'main', component: MainComponent, canActivate: [UserGuard], children: [
      {path: 'bio', component: BioComponent},
      {path: 'text', component: TextComponent},
      {path: 'privacy-policy', component: PrivacyPolicyComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'portfolio-forms', component: PortfolioFormsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
