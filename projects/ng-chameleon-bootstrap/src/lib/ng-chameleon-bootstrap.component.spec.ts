import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChameleonBootstrapComponent } from './ng-chameleon-bootstrap.component';

describe('NgChameleonBootstrapComponent', () => {
  let component: NgChameleonBootstrapComponent;
  let fixture: ComponentFixture<NgChameleonBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgChameleonBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChameleonBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
