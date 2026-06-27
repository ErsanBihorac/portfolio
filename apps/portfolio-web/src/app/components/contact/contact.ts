import { Component } from '@angular/core';
import { GlowingBtn } from '../glowing-btn/glowing-btn';
import { Button } from '../../interfaces/button.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [GlowingBtn, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './scss/contact.scss',
})
export class Contact {
  linkedin: string = 'https://www.linkedin.com/in/ersan-bihorac/';
  github: string = 'https://github.com/ErsanBihorac';
  mail: string = 'contact@ebihorac.de';

  glowingBtn: Button = {
    text: 'Contact Me',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };

  navigateTo(adress: string) {
    window.open(adress, '_blank');
  }

  openMail() {
    const subject = encodeURIComponent('Contact via Website');
    const body = encodeURIComponent('Hi,\n\n ...');

    window.location.href = `mailto:${this.mail}?subject=${subject}&body=${body}`;
  }
}
