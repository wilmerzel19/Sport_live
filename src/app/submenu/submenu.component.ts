import { Component } from '@angular/core';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import { faFootball } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faVolleyball } from '@fortawesome/free-solid-svg-icons';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {

  faBasketball = faBasketball;
  faHockeyPuck = faHockeyPuck;
  faFootball = faFootball;
  faFutbol = faFutbol;
  faVolleyball = faVolleyball;
  faTableTennis = faTableTennis;
  



}
