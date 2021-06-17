import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentUserScheduleComponent } from './paitent-user-schedule.component';

describe('PaitentUserScheduleComponent', () => {
  let component: PaitentUserScheduleComponent;
  let fixture: ComponentFixture<PaitentUserScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaitentUserScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaitentUserScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
