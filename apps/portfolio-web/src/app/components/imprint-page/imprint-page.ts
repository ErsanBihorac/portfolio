import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-imprint-page',
  imports: [Navigation, RouterLink],
  templateUrl: './imprint-page.html',
  styleUrl: './scss/imprint-page.scss',
})
export class ImprintPage {

}
