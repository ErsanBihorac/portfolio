import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent {
  addArrowAnimation() {
    document.getElementById('arrow-left2')?.classList.add('move-down');
  }
}
