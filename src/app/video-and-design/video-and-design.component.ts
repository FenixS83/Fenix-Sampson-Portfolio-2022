import { Component, OnInit } from '@angular/core';
import { IVideo } from './avDesignsInterface';
import { VideosService } from './av-design.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-and-design',
  templateUrl: './video-and-design.component.html',
  styleUrls: ['./video-and-design.component.css']
})
export class VideoAndDesignComponent implements OnInit {

  pageTitle: string = 'A/V and Design';
  errorMessage= '';
  sub!: Subscription;
  
  
  
  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredVideos = this.performFilter(value);
  }
  
  filteredVideos: IVideo[] = [];
  video: IVideo [] = [];







  constructor(private videosService: VideosService) { }

  performFilter(filterBy: string): IVideo[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.video.filter((video: IVideo) =>
      video.organization.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.videosService.getVideos().subscribe({
      next: (video: IVideo[]) => {
        this.video = video;
        this.filteredVideos = this.video;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
