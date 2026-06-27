import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-privacy-policy-page',
  imports: [Navigation, RouterLink],
  templateUrl: './privacy-policy-page.html',
  styleUrl: './scss/privacy-policy-page.scss',
})
export class PrivacyPolicyPage {

}
