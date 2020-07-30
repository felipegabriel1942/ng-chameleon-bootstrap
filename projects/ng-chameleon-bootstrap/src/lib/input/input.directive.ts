import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[chaInput]'
})
export class InputDirective {

  @HostBinding('class.form-control') formControlClass = true;

}
