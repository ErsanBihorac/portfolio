import { Component, EventEmitter, Output } from '@angular/core';
import { Fireflies } from '../fireflies/fireflies';
import { CommonModule } from '@angular/common';
import { GlowingBtn } from '../glowing-btn/glowing-btn';
import { Button } from '../../interfaces/button.interface';
import { Router } from "@angular/router";

@Component({
  selector: 'app-introduction',
  imports: [Fireflies, CommonModule, GlowingBtn],
  templateUrl: './introduction.html',
  styleUrl: './scss/introduction.scss',
})
export class Introduction {
  @Output() scrollNext = new EventEmitter<void>();

  linkedin: string = 'https://www.linkedin.com/in/ersan-bihorac/';
  github: string = 'https://github.com/ErsanBihorac';
  mail: string = 'contact@ebihorac.de';

  glowingBtnContact: Button = {
    text: 'Get Started Now',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };

  glowingBtnProjects: Button = {
    text: 'View Projects',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z',
    },
  };

  constructor(private router: Router) {}

  navigateTo(adress: string) {
    window.open(adress, '_blank');
  }

  navigateToContact() {
    this.router.navigate(['/contact'])
  }

  navigateToProjects() {
    this.router.navigate(['/projects'])
  }

  openMail() {
    const subject = encodeURIComponent('Contact via Website');
    const body = encodeURIComponent('Hi,\n\n ...');

    window.location.href = `mailto:${this.mail}?subject=${subject}&body=${body}`;
  }

  scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
}
