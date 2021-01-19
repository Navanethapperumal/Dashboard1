import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <p>
      alert works!
    </p>
  `,
  styles: [
  ]
})
export class AlertComponent implements OnInit {
  output: any;

  constructor() { }

  ngOnInit(): void {
  }

}
