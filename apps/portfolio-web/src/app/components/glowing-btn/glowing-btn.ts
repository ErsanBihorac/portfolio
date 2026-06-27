import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Button } from '../../interfaces/button.interface';

@Component({
  selector: 'app-glowing-btn',
  imports: [CommonModule],
  templateUrl: './glowing-btn.html',
  styleUrl: './scss/glowing-btn.scss',
})
export class GlowingBtn {
  @Input({required: true}) button!: Button
  @Input({required: false}) bgColor!: string
  @Input({required: true}) height!: string
  @Input({required: true}) width!: string
  @Input({required: true}) size!: 'medium' | 'large';
}
