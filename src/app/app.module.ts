import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RoutingRoutingModule} from './routing/routing-routing.module';
import {SharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainComponent} from './modules/main/main.component';
import {AuthorizationComponent} from './modules/authorization/authorization.component';
import {BioComponent} from './modules/main/bio/bio.component';
import {PortfolioComponent} from './modules/main/portfolio/portfolio.component';
import {TextComponent} from './modules/main/text/text.component';
import {PrivacyPolicyComponent} from './modules/main/privacy-policy/privacy-policy.component';
import {HeaderComponent} from './modules/main/header/header.component';
import {UserGuard} from './shared/guards/user.guard';
import {TokenInterceptor} from './shared/interceptor/token.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditorModule} from 'primeng/editor';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {NgxUploaderModule} from 'ngx-uploader';
import {NgxPaginationModule} from 'ngx-pagination';
import {SafePipe} from './shared/pipe/pipe';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    PortfolioComponent,
    TextComponent,
    PrivacyPolicyComponent,
    AuthorizationComponent,
    HeaderComponent,
    MainComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    RoutingRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EditorModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    NgxUploaderModule,
    NgxPaginationModule
  ],
  providers: [UserGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
