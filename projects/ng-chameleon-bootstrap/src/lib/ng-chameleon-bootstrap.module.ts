import { NgModule } from '@angular/core';
import { NgChameleonBootstrapComponent } from './ng-chameleon-bootstrap.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [NgChameleonBootstrapComponent, InputComponent],
  imports: [
  ],
  exports: [NgChameleonBootstrapComponent, InputComponent]
})
export class NgChameleonBootstrapModule { }
