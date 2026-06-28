import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyBtn } from '../fancy-btn/fancy-btn';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, FancyBtn, RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './scss/navigation.scss',
})
export class Navigation implements AfterViewInit {
  @Output() scrollToQNA = new EventEmitter<void>();
  @Output() scrollToProjects = new EventEmitter<void>();
  @Output() scrollToIntro = new EventEmitter<void>();
  navigationOpen: boolean = false;
  animationsEnabled: boolean = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    requestAnimationFrame(() => {
      this.animationsEnabled = true;
    });
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }

  toggleAnimation() {
    if (this.navigationOpen == false) {
      this.navigationOpen = true;
    } else {
      this.navigationOpen = false;
    }
  }

  openMenu() {
    if (this.animationsEnabled == true) {
      this.toggleAnimation();
    }
  }

  navigateToQna() {
    if (!this.isHomePage()) {
      this.router.navigate(['/']).then(() => {});
    } else {
      this.scrollToQNA.emit();
    }
  }

  navigateToProjects() {
    if (!this.isHomePage()) {
      this.router.navigate(['/']).then(() => {});
    } else {
      this.scrollToProjects.emit();
    }
  }

  navigateToIntro() {
    if (!this.isHomePage()) {
      this.router.navigate(['/']).then(() => {});
    } else {
      this.scrollToIntro.emit();
    }
  }
}
