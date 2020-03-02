import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { StaticModule } from './static/static.module';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { SocialShareComponent } from './common/social-share/social-share.component';
import { HttpInterceptorService } from './common/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocialShareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    StaticModule,
    ShareButtonsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
