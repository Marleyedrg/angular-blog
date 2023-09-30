import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ContentPageComponent } from './pages/content/content-page/content-page.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent,
    pathMatch:'full',
  },
  {
    path:"content/:id",
    component:ContentPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
