import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from 'src/app/pages/home/home.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './pages/content/content.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //pages modules
    HomeModule,
    ContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
