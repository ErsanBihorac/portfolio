import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fancy-btn',
  imports: [CommonModule],
  templateUrl: './fancy-btn.html',
  styleUrl: './scss/fancy-btn.scss',
})
export class FancyBtn {
  @Input() text: string = '';
}
