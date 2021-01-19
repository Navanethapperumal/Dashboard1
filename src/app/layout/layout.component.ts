import { Component, ComponentFactoryResolver, ComponentRef, OnInit } from '@angular/core';
import { Renderer2, ViewChild, ElementRef } from '@angular/core';
import {  Injectable, Inject, ReflectiveInjector} from '@angular/core'
import {BarchartComponent} from '../barchart/barchart.component'
import { Type,ViewContainerRef} from '@angular/core';
import { AlertComponent } from '../alert/alert.component'
import { ComponentFactory } from '@angular/core';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {
  factoryResolver: any;
  rootViewContainer: any;

  ngOnInit(): void {
  }
  @ViewChild('cardContainer') div: ElementRef;

  @ViewChild("cardContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<BarchartComponent>;

  constructor (private renderer: Renderer2, private resolver: ComponentFactoryResolver){ }
  
  addElement() {
    const div: HTMLDivElement  = this.renderer.createElement('div');
    div.classList.add("card");
    div.classList.add("card-small");
    const innerTags = `<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
    <span>Run and Watch Tests</span>`;
    div.innerHTML = innerTags;
    this.renderer.appendChild(this.div.nativeElement, div)
  }


  createComponent() {
    
    const factory: ComponentFactory<BarchartComponent> = this.resolver.resolveComponentFactory(BarchartComponent);

    this.componentRef = this.container.createComponent(factory);
    
  }
  
    ngOnDestroy() {
      this.componentRef.destroy();    
    }

}
