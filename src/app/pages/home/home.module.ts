import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { BigCardComponent } from '../components/big-card/big-card.component';
import { SmallCardComponent } from '../components/small-card/small-card.component';
//page component
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
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
    AppRoutingModule,
  ]
})
export class HomeModule { }
