import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Firefly {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  travelX: number;
  travelY: number; 
}

@Component({
  selector: 'app-fireflies',
  imports: [CommonModule],
  templateUrl: './fireflies.html',
  styleUrl: './scss/fireflies.scss',
})
export class Fireflies implements OnInit {
  fireflies: Firefly[] = [];

  ngOnInit(): void {
    const count = 30;
    
    for (let i = 0; i < count; i++) {
      this.fireflies.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 1,
        duration: 6 + Math.random() * 6,
        delay: 0,
        travelX: (Math.random() - 0.5) * 500,
        travelY: (Math.random() - 0.5) * 500
      });
    }
  }
}
