import { Component } from '@angular/core';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';
import { faFootball } from '@fortawesome/free-solid-svg-icons';
import { faVolleyball } from '@fortawesome/free-solid-svg-icons';
import { faFutbol} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  faBasketball = faBasketball;
  faTableTennis = faTableTennis;
  faHockeyPuck = faHockeyPuck;
  faFootball = faFootball;
  faVolleyball = faVolleyball;
  faFutbol = faFutbol;



}
