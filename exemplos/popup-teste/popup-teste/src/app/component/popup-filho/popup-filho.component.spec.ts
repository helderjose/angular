import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFilhoComponent } from './popup-filho.component';

describe('PopupFilhoComponent', () => {
  let component: PopupFilhoComponent;
  let fixture: ComponentFixture<PopupFilhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupFilhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
