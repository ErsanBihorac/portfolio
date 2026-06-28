import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Button } from '../../interfaces/button.interface';
import { ProjectShowcase } from '../project-showcase/project-showcase';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectShowcase],
  templateUrl: './projects.html',
  styleUrl: './scss/projects.scss',
})
export class Projects implements AfterViewInit {
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  wasViewed = false;

  glowingBtn: Button = {
    text: 'Contact Me',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };

  projects: Project[] = [
    {
      title: 'Pet Markt',
      description:
        'A modern full-stack e-commerce application for pet products, featuring secure authentication, shopping cart functionality, Stripe payments, order management, and a responsive user experience.',
      projectUrl: '',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.wasViewed = true;
        observer.disconnect();
      }
    });

    observer.observe(this.projectsSection.nativeElement);
  }
}
