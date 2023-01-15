import { Injectable, OnInit } from '@angular/core';
import { Car } from './car.model';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class CarsService implements OnInit {


  private cars: Car[] = [];

  constructor(private fire: FirebaseService) {
    this.loadOfDatabase();
  }

  ngOnInit(): void {

  }

  loadOfDatabase() {
    this.fire.loadCars().subscribe(res => {
      let obj = Object.values(res)
      for (let i = 0; i < obj.length; i++) {
        this.cars[i] = new Car(obj[i].brand, obj[i].model, obj[i].price, obj[i].type, obj[i].hp, obj[i].img[0], obj[i].img[1], obj[i].img[2])
      }
    })
  }

  loadToDatabase() {
    this.fire.saveCars(this.getCars());
  }

  setCars(cars: Car[]) {
    this.cars = cars;
  }

  getCars() {
    return this.cars;
  }
  getCarsForId(id: number) {
    return this.cars[id];
  }

  addCars(car: Car) {
    this.cars.push(car);
  }

  deleteCars(id: number) {
    this.cars.splice(id, 1)
  }
  updateCars(car: Car, id: number) {
    this.cars[id] = car;
  }
  
}
