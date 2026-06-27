import { Component, Input } from '@angular/core';
import { Button } from '../../interfaces/button.interface';

@Component({
  selector: 'app-banner-btn',
  imports: [],
  templateUrl: './banner-btn.html',
  styleUrl: './scss/banner-btn.scss',
})
export class BannerBtn {
  @Input({required: true}) button!: Button
}
