import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page/content-page.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';

@NgModule({
  declarations: [
    ContentPageComponent,
    MenuBarComponent,
    BigCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuBarComponent,
    BigCardComponent,
    //
    ContentPageComponent,
  ]
})
export class ContentModule { }
