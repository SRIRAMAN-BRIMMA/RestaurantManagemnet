import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit ,Input,Output} from '@angular/core';
import { Restaurant } from '../restaurant'
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  name:any;
  public restaurants: Restaurant[] =[];
  address: any;
search:any;
food:any;
//   constructor(private restaurantService: RestaurantService){}


// ngOnInit(){ 
//   this.getRestaurants();
  
// }


//   public getRestaurants(): void {
//     this.restaurantService.getRestaurants().subscribe(
//       (response: Restaurant[]) => {
//         this.restaurants = response;
//         console.log(this.restaurants);
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }
constructor(private restaurant:RestaurantService) {}
  
ngOnInit(){
 
 
  this.restaurant.getapi().subscribe((res:any)=>
  {
   this.food=res;

   console.log(this.food);

  })
 
}


key: string ='rating';
reverse:boolean = false;
sort(key: string){
  this.key =key;
  this.reverse =!this.reverse;

}

   

}
