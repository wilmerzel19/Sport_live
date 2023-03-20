import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLink,  RouterModule,  Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcordionComponent } from './acordion/acordion.component';
import { MenuDerechoComponent } from './menu-derecho/menu-derecho.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubmenuComponent } from './submenu/submenu.component';
import { EventosComponent } from './eventos/eventos.component';
import { InformacionComponent } from './informacion/informacion.component';
import {MatExpansionModule} from '@angular/material/expansion';


const routes: Routes = [
  { path: '', component:SidebarComponent  },
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AcordionComponent,
    MenuDerechoComponent,
    SubmenuComponent,
    EventosComponent,
    InformacionComponent




  ],
  imports: [
    BrowserModule,

AppRoutingModule,
    RouterModule.forRoot([
      {path: 'sidebar', component: SidebarComponent},
      {path: 'eventos', component: EventosComponent},
      {path: 'informacion', component: InformacionComponent}


    ]),
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatTabsModule



  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
