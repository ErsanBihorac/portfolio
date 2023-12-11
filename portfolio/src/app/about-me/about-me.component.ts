import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  displayFrame() {
    document.getElementById('image-frame')?.classList.add('opacity');
  }

  hideFrame() {
    document.getElementById('image-frame')?.classList.remove('opacity');
  }

  addArrowAnimation() {
    document.getElementById('arrow-left')?.classList.add('move-down');
  }
}
