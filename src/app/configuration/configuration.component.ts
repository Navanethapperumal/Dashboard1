import { Component, OnInit } from '@angular/core';
import { ConfigurationModel } from '../Models/configuration-model';
import { ConfigurationService } from '../services/configuration/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']

})
export class ConfigurationComponent  {

  title = 'app';
  topics = ['Angular', 'React', 'Vue'];
  configModel = new ConfigurationModel('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  topicHasError = true;
  public submitted = false;
   errorMsg = '';

   constructor(private _configService: ConfigurationService) {}



  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    alert(100);
    //this._configService.save(this.configModel)
      //.subscribe(response => console.log('Success!', response),error => this.errorMsg = error.statusText)
  }

}
