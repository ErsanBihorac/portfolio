import { Component } from '@angular/core';

@Component({
  selector: 'app-project-1',
  templateUrl: './project-1.component.html',
  styleUrls: ['./project-1.component.scss']
})
export class Project1Component {

  removeGrayscale() {
    document.getElementById('img1')?.classList.add('grayscale-none');
    document.getElementById('frame1')?.classList.remove('d-none');
    document.getElementById('project-info1')?.classList.add('info-animation');
  }

  addGrayscale() {
    document.getElementById('img1')?.classList.remove('grayscale-none');
    document.getElementById('frame1')?.classList.add('d-none');
    document.getElementById('project-info1')?.classList.remove('info-animation');
  }
}
