import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-menu-derecho',
  templateUrl: './menu-derecho.component.html',
  styleUrls: ['./menu-derecho.component.css']
})
export class MenuDerechoComponent {
    toppings = this._formBuilder.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });

  constructor(private _formBuilder: FormBuilder) {}

}
