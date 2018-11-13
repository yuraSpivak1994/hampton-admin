import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TextComponent } from './text/text.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import {RoutingRoutingModule} from "./routing/routing-routing.module";
import { AuthorizationComponent } from './authorization/authorization.component';
import {AuthService} from "./authorization/auth.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    PortfolioComponent,
    TextComponent,
    PrivacyPolicyComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    RoutingRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
