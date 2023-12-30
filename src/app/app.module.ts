import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//CONFIG LOCAL APP
import localEsBO from '@angular/common/locales/es-BO';

import { registerLocaleData } from '@angular/common'

registerLocaleData(localEsBO);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
  ],
  providers: [
    //CONFIG GLOBALLY
    {
      provide: LOCALE_ID, useValue: 'es-BO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
