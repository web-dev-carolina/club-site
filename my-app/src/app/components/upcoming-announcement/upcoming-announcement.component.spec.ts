import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingAnnouncementComponent } from './upcoming-announcement.component';
import {AnnouncementComponent} from './announcement/announcement.component';
import {UpcomingEventComponent} from './upcoming-event/upcoming-event.component';

describe('UpcomingAnnouncementComponent', () => {
  let component: UpcomingAnnouncementComponent;
  let fixture: ComponentFixture<UpcomingAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AnnouncementComponent,
        UpcomingEventComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
