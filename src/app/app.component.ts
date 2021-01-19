import { Component } from '@angular/core';
import {BarchartComponent} from './barchart/barchart.component'
import {LayoutComponent} from './layout/layout.component'
import {ConfigurationComponent} from './configuration/configuration.component'
import {Test1Component} from './test1/test1.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard1';
}

