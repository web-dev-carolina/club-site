import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventComponent } from './upcoming-event.component';

describe('UpcomingEventComponent', () => {
  let component: UpcomingEventComponent;
  let fixture: ComponentFixture<UpcomingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
