import { Component, inject } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-video',
  imports: [YouTubePlayer, NgClass],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  themeService: ThemeService = inject(ThemeService);
}
