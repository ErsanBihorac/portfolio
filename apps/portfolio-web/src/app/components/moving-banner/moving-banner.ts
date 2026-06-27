import { Component, Input } from '@angular/core';
import { BannerBtn } from '../banner-btn/banner-btn';
import { CommonModule } from '@angular/common';
import { Button } from '../../interfaces/button.interface';

@Component({
  selector: 'app-moving-banner',
  imports: [BannerBtn, CommonModule],
  templateUrl: './moving-banner.html',
  styleUrl: './scss/moving-banner.scss',
})
export class MovingBanner {
  @Input({required: true}) direction!: "left" | "right"
  @Input({ required: true }) buttons!: Button[];
}
