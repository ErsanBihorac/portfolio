import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-q-n-a-card',
  imports: [],
  templateUrl: './q-n-a-card.html',
  styleUrl: './q-n-a-card.scss',
})
export class QNACard {
  @Input() qna!: { question: string; answer: string; active: boolean };
}
