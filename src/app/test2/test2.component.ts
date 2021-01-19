import { Component, OnInit } from '@angular/core';
import { ConfigurationModel } from '../Models/configuration-model';
import { ConfigurationService } from '../services/configuration/configuration.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  title = 'app';
  public topics:any = ['complete', 'incremental', 'replace'];
  configModel = new ConfigurationModel('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  topicHasError = false;
  public submitted:boolean = false;
  errorMsg = '';


  constructor() {}

  ngOnInit(): void {
  }

}
