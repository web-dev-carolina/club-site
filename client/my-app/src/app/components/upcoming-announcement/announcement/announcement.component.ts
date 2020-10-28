import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../../services/announcements.service';
import { Announcement } from '../../../../Announcement';


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  announcements: Announcement[];
  constructor(private annoucementService: AnnouncementService) { 
    this.annoucementService.getAnnouncements().subscribe((announcements: any[]) => {
      this.announcements = announcements;
    });
  }

  ngOnInit(): void {
  }

}

