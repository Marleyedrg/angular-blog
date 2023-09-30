import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { ContentPageComponent } from './content-page/content-page.component';

@NgModule({
  declarations: [
    ContentPageComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
  ],
  exports:[
    ContentPageComponent,
  ]
})
export class ContentModule { }
