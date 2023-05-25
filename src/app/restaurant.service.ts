import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RestaurantService {
    private apiServerUrl =environment.apiBaseUrl;
  
    constructor(private http: HttpClient){}
  

    getdata(){
      return this.http.get('https://localhost:44382/api/tvl')
    }
    
    getapi(){
      return this.http.get('https://localhost:44382/api/Food')
    }


}
