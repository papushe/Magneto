import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixTapeComponent } from './mix-tape.component';

describe('MixTapeComponent', () => {
  let component: MixTapeComponent;
  let fixture: ComponentFixture<MixTapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixTapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixTapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
