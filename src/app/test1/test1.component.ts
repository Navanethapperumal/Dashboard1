import { Component, OnInit } from '@angular/core';
import { ConfigurationModel } from '../Models/configuration-model';
import { ConfigurationService } from '../services/configuration/configuration.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  title = 'app';
  public topics:any = ['complete', 'incremental', 'replace'];
  configModel = new ConfigurationModel('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  hasError = false;
  public submitted:boolean = false;
  errorMsg = '';

  ngOnInit(): void {}

  constructor() {}
//private _configService: ConfigurationService

  onSubmit() {
     this.submitted = true;
    //this._configService.save(this.configModel)
      //.subscribe(response => console.log('Success!', response),error => this.errorMsg = error.statusText)
  }

}
