import { Component } from '@angular/core';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faCaretLeft = faCaretLeft;
  faCalendarDays = faCalendarDays;
  faGripVertical = faGripVertical;



}
