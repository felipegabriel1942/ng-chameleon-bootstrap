import { NgModule } from '@angular/core';
import { NgChameleonBootstrapComponent } from './ng-chameleon-bootstrap.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input/input.directive';



@NgModule({
  declarations: [
    NgChameleonBootstrapComponent,
    InputComponent,
    InputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgChameleonBootstrapComponent,
    InputComponent,
    InputDirective
  ]
})
export class NgChameleonBootstrapModule { }
