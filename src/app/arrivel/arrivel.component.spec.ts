import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivelComponent } from './arrivel.component';

describe('ArrivelComponent', () => {
  let component: ArrivelComponent;
  let fixture: ComponentFixture<ArrivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
