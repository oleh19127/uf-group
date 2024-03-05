import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {}
