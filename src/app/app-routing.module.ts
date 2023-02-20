import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './dashboard/userhome/userhome.component';
import { HomeComponent } from './homepage/home/home.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'dashboard', component:UserhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
