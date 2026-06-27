import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  imports: [Navigation, RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './scss/projects-page.scss',
})
export class ProjectsPage {

}
