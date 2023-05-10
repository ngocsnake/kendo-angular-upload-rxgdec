import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadModule } from '@progress/kendo-angular-upload';
import { RTL } from '@progress/kendo-angular-l10n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UploadComponent } from './upload.component';
import { UploadInterceptor } from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, UploadModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, UploadComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: RTL,
      useValue: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true
    }
  ]
})

export class AppModule { }
