import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmutedComponent } from './emuted.component';

describe('EmutedComponent', () => {
  let component: EmutedComponent;
  let fixture: ComponentFixture<EmutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
