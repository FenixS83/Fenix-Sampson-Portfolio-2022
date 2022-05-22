import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAndDesignComponent } from './video-and-design.component';

describe('VideoAndDesignComponent', () => {
  let component: VideoAndDesignComponent;
  let fixture: ComponentFixture<VideoAndDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoAndDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAndDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
