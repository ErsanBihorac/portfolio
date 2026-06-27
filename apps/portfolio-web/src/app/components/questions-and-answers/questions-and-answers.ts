import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { QNACard } from '../q-n-a-card/q-n-a-card';
import { GlowingBtn } from '../glowing-btn/glowing-btn';
import { Button } from '../../interfaces/button.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-and-answers',
  imports: [CommonModule, QNACard, GlowingBtn],
  templateUrl: './questions-and-answers.html',
  styleUrl: './scss/questions-and-answers.scss',
})
export class QuestionsAndAnswers implements AfterViewInit {
  @ViewChild('leftPart') leftPart!: ElementRef;
  wasViewed = false;

  glowingBtn: Button = {
    text: 'Contact Me',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };

  questionAndAnswers = [
    {
      question: 'What kind of software do you develop?',
      answer:
        'I develop web-based applications — everything that runs in the browser, from simple websites to complex web applications similar to platforms like Netflix or Discord',
      active: true,
    },
    {
      question: 'What technologies and programming languages do you specialize in?',
      answer:
        'I have experience with a wide range of programming languages and frameworks. However, I specialize in the technologies that allow me to deliver the highest quality and client satisfaction — primarily with Angular and NestJS in TypeScript. I also work extensively with containerization and collaboration tools such as Docker and Git to build scalable products and enable smooth teamwork',
      active: false,
    },
    {
      question: 'Do you work with startups, companies, or individual clients?',
      answer:
        'I don’t have a specific preference — I work with startups, companies, and individual clients alike. What matters most to me is clear communication and well-defined requirements, so I can deliver the best possible service',
      active: false,
    },
    {
      question: 'How do we start a project together?',
      answer:
        'Simply send me a message. I’ll introduce myself, we’ll talk about your goals and requirements, go through a few key questions, and then see if we’re a good fit to work together',
      active: false,
    },
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.wasViewed = true;
        observer.disconnect();
      }
    });

    observer.observe(this.leftPart.nativeElement);
  }

  toggleAnswer(index: number) {
    this.questionAndAnswers[index].active = !this.questionAndAnswers[index].active;
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
