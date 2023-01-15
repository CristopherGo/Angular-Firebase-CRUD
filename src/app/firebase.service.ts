import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private token: string = '';
  constructor(private httpclient: HttpClient, private loginservice: LoginService) {
    this.token = this.loginservice.getIdToken();
  }

  loadCars() {
   console.log('https://cars-a9d92-default-rtdb.europe-west1.firebasedatabase.app/cars.json?auth=' + this.token)
      return this.httpclient.get('https://cars-a9d92-default-rtdb.europe-west1.firebasedatabase.app/cars.json?auth=' + this.token)
      
    
  }

  saveCars(cars: Car[]) {
    this.httpclient.put('https://cars-a9d92-default-rtdb.europe-west1.firebasedatabase.app/cars.json?auth=' + this.token, cars). //.
      subscribe(response => console.log('cars saved' + response),
        error => console.log(error)
      );
  }
}
