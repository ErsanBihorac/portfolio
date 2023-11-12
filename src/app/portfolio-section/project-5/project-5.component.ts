import { Component } from '@angular/core';

@Component({
  selector: 'app-project-5',
  templateUrl: './project-5.component.html',
  styleUrls: ['./project-5.component.scss']
})
export class Project5Component {
  
  removeGrayscale() {
    document.getElementById('img5')?.classList.add('grayscale-none');
    document.getElementById('frame5')?.classList.remove('d-none');
    document.getElementById('project-info5')?.classList.add('info-animation');
  }

  addGrayscale() {
    document.getElementById('img5')?.classList.remove('grayscale-none');
    document.getElementById('frame5')?.classList.add('d-none');
    document.getElementById('project-info5')?.classList.remove('info-animation');
  }
}
