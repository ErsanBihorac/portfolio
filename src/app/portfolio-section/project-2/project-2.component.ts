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
    document.getElementById('project-info2')?.classList.add('info-animation');
  }

  addGrayscale() {
    document.getElementById('img2')?.classList.remove('grayscale-none');
    document.getElementById('frame2')?.classList.add('d-none');
    document.getElementById('project-info2')?.classList.remove('info-animation');
  }
}
