import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-wild-card-page',
  imports: [Navigation, RouterLink],
  templateUrl: './wild-card-page.html',
  styleUrl: './scss/wild-card-page.scss',
})
export class WildCardPage {

}
