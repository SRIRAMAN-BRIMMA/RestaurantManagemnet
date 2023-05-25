import { HttpClient } from '@angular/common/http';
import { Component,Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
tvl:any;
  restaurants:any;
  result:boolean=false;
  result1:boolean=true;


 

  constructor(private restaurant:RestaurantService) {}
  
  ngOnInit(){
   
   
    this.restaurant.getdata().subscribe((res:any)=>
    {
     this.tvl=res;

     console.log(this.tvl);

    })
   

  
  }

  getCard()
  {
       this.result=true;

       this.result1=false;

      
  }
  }

