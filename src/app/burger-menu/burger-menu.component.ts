import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {

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
