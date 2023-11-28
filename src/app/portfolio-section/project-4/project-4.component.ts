import { Component } from '@angular/core';

@Component({
  selector: 'app-project-4',
  templateUrl: './project-4.component.html',
  styleUrls: ['./project-4.component.scss']
})
export class Project4Component {

  removeGrayscale() {
    document.getElementById('img4')?.classList.add('grayscale-none');
    document.getElementById('frame4')?.classList.remove('d-none');
    document.getElementById('project-info4')?.classList.remove('d-none');
    if (window.innerWidth >= 1650) {
      document.getElementById('project-info4')?.classList.add('info-animation');
    } else {
      document.getElementById('project-info4')?.classList.add('info-animation-1650px');
    }
  }

  addGrayscale() {
    document.getElementById('img4')?.classList.remove('grayscale-none');
    document.getElementById('frame4')?.classList.add('d-none');
    document.getElementById('project-info4')?.classList.add('d-none');
    if (window.innerWidth >= 1650) {
      document.getElementById('project-info4')?.classList.remove('info-animation');
    } else {
      document.getElementById('project-info4')?.classList.remove('info-animation-1650px');
    }
  }
}
