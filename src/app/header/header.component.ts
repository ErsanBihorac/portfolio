import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  burgermenu_opened = false;

  burger_images = [
    "../../assets/img/animations/burger-menu.png",
    "../../assets/img/animations/burgermenu1.png",
    "../../assets/img/animations/burgermenu2.png",
    "../../assets/img/animations/burgermenu3.png",
    "../../assets/img/animations/burgermenu4.png"
  ];

  burgerMenu() {
    if (!this.burgermenu_opened) {
      this.openBurgerMenu();
      this.burgerAnimation();
      this.burgermenu_opened = true;
    } else {
      this.closeBurgerMenu();
      this.burgerAnimationReverse();
      this.burgermenu_opened = false;
    }

  }

  closeBurgerMenu() {
    document.getElementById('about-me-page')?.classList.remove('d-none');
    document.getElementById('main-page')?.classList.remove('d-none');
    document.getElementById('my-skills-page')?.classList.remove('d-none');
    document.getElementById('portfolio-page')?.classList.remove('d-none');
    document.getElementById('footer')?.classList.remove('d-none');
    document.getElementById('burger-menu-page')?.classList.add('d-none');
  }

  openBurgerMenu() {
    document.getElementById('about-me-page')?.classList.add('d-none');
    document.getElementById('main-page')?.classList.add('d-none');
    document.getElementById('my-skills-page')?.classList.add('d-none');
    document.getElementById('portfolio-page')?.classList.add('d-none');
    document.getElementById('footer')?.classList.add('d-none');
    document.getElementById('burger-menu-page')?.classList.remove('d-none');
  }

  burgerAnimation() {
    let img = document.getElementById('img-burger') as HTMLImageElement;
    for (let i = 0; i < this.burger_images.length; i++) {
      let burger_images = this.burger_images[i];
      setTimeout(() => {
        img.src = burger_images;
      }, 75 * i);
    }
  }

  burgerAnimationReverse() {
    let img = document.getElementById('img-burger') as HTMLImageElement;
    this.burger_images.reverse();
    for (let i = 0; i < this.burger_images.length; i++) {
      let burger_images = this.burger_images[i];
      setTimeout(() => {
        img.src = burger_images;
      }, 75 * i);
    }
    this.burger_images.reverse();
  }
}
