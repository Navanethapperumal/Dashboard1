import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { LayoutComponent } from './layout/layout.component';
import { AlertComponent } from './alert/alert.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ConfigurationService} from './services/configuration/configuration.service';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component'

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    LayoutComponent,
    AlertComponent,
    ConfigurationComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
