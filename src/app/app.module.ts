import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantService } from './restaurant.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SearchPipe } from './search.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { LocationComponent } from './location/location.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    LocationComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,RouterModule,FormsModule,Ng2OrderModule,Ng2SearchPipeModule,ToggleButtonModule,NgbModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
