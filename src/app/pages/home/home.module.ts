import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
//page component
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    //page component
    HomePageComponent,
  ],
  exports:[
    HomePageComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
