import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() car: Car = new Car("", "", "", "", "", "", "", "");
  @Input() id: number = 0;

  constructor(private cars: CarsService, private loginservice: LoginService) { }

  ngOnInit(): void {

  }
  getUser() {
    return this.loginservice.getIdToken() ;
  }

  delete(id: number){
    this.cars.deleteCars(id);
    this.cars.loadToDatabase();
  }

}
