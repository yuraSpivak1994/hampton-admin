import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TextComponent } from './text/text.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import {AuthService} from './authorization/auth.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RoutingRoutingModule} from './routing/routing-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    PortfolioComponent,
    TextComponent,
    PrivacyPolicyComponent,
    AuthorizationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
