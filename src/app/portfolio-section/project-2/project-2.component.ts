import { Component } from '@angular/core';

@Component({
  selector: 'app-project-2',
  templateUrl: './project-2.component.html',
  styleUrls: ['./project-2.component.scss']
})
export class Project2Component {

  removeGrayscale() {
    document.getElementById('img2')?.classList.add('grayscale-none');
    document.getElementById('frame2')?.classList.remove('d-none');
    if (window.innerWidth >= 1650) {
      document.getElementById('project-info2')?.classList.add('info-animation');
    } else {
      document.getElementById('project-info2')?.classList.add('info-animation-1650px');
    }
  }

  addGrayscale() {
    document.getElementById('img2')?.classList.remove('grayscale-none');
    document.getElementById('frame2')?.classList.add('d-none');
    if (window.innerWidth >= 1650) {
      document.getElementById('project-info2')?.classList.remove('info-animation');
    } else {
      document.getElementById('project-info2')?.classList.remove('info-animation-1650px');
    }
  }
}
