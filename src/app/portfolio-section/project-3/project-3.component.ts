import { Component } from '@angular/core';

@Component({
  selector: 'app-project-3',
  templateUrl: './project-3.component.html',
  styleUrls: ['./project-3.component.scss']
})
export class Project3Component {
  
  removeGrayscale() {
    document.getElementById('img3')?.classList.add('grayscale-none');
    document.getElementById('frame3')?.classList.remove('d-none');
    document.getElementById('project-info3')?.classList.add('info-animation');
  }

  addGrayscale() {
    document.getElementById('img3')?.classList.remove('grayscale-none');
    document.getElementById('frame3')?.classList.add('d-none');
    document.getElementById('project-info3')?.classList.remove('info-animation');
  }
}
