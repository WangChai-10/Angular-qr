import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {QRCodeModule} from 'angularx-qrcode';
import {NgxQRCodeModule} from 'ngx-qrcode2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GeneralComponent } from './general/general.component';
import { ListComponent } from './list/list.component';

import { GeneralService } from './_services/general.service';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    ListComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ GeneralService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
