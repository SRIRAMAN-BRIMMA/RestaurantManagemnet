import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'home',component:HomeComponent},
  {path:'restaurant',component:RestaurantComponent},
  {path:'location',component:LocationComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
