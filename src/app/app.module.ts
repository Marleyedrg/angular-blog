import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from 'src/app/pages/home/home.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './pages/content/content.module';
import { MenuTitleComponent } from './pages/components/menu-title/menu-title.component';
import { MenuBarComponent } from './pages/components/menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    MenuTitleComponent,
    MenuBarComponent,
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
