import { Component, OnInit, Input, HostBinding, ViewEncapsulation, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { InputDirective } from './input.directive';

@Component({
  selector: 'cha-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  /**
   * The label that will be show over the input field.
   */
  @Input() label: string;

  /**
   * The type of the content of the input. Default is 'text'.
   */
  @Input() type = 'text';


  constructor() { }

  ngOnInit() {



  }

}
