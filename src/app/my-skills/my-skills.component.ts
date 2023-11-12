import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  addArrowAnimation() {
    document.getElementById('arrow-right')?.classList.add('move-down');
  }
}
