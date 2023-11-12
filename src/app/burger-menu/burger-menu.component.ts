import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {
  burger_images = [
    "../../assets/img/animations/burger-menu.png",
    "../../assets/img/animations/burgermenu1.png",
    "../../assets/img/animations/burgermenu2.png",
    "../../assets/img/animations/burgermenu3.png",
    "../../assets/img/animations/burgermenu4.png"
  ];

  goTo(id: string) {
    this.closeBurgerMenu();
    document.getElementById(id)?.scrollIntoView();
    this.burgerAnimationReverse();
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

  closeBurgerMenu() {
    document.getElementById('about-me-page')?.classList.remove('d-none');
    document.getElementById('main-page')?.classList.remove('d-none');
    document.getElementById('my-skills-page')?.classList.remove('d-none');
    document.getElementById('portfolio-page')?.classList.remove('d-none');
    document.getElementById('footer')?.classList.remove('d-none');
    document.getElementById('burger-menu-page')?.classList.add('d-none');
  }

  headerAnimation(container: string, image: string) {
    let superiorcontainer = document.getElementById(container);
    let img = document.getElementById(image) as HTMLImageElement;

    setTimeout(() => {
      img.src = "../../assets/img/animations/burgermenu-rectangle2.png";
      superiorcontainer?.classList.remove('rectangle1');
      superiorcontainer?.classList.add('rectangle2');
    }, 50);

    setTimeout(() => {
      img.src = "../../assets/img/animations/burgermenu-rectangle3.png";
      superiorcontainer?.classList.remove('rectangle2');
      superiorcontainer?.classList.add('rectangle3');
    }, 100);
  }

  headerAnimationReverse(container: string, image: string) {
    let superiorcontainer = document.getElementById(container);
    let img = document.getElementById(image) as HTMLImageElement;

    setTimeout(() => {
      img.src = "../../assets/img/animations/burgermenu-rectangle2.png";
      superiorcontainer?.classList.add('rectangle2');
      superiorcontainer?.classList.remove('rectangle3');
    }, 50);

    setTimeout(() => {
      img.src = "../../assets/img/animations/burgermenu-rectangle1.png";
      superiorcontainer?.classList.add('rectangle1');
      superiorcontainer?.classList.remove('rectangle2');
    }, 100);
  }
}
