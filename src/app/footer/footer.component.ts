import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  displayLine() {
    document.getElementById('line')?.classList.remove('d-none');
  }

  hideLine() {
    document.getElementById('line')?.classList.add('d-none');
  }
}