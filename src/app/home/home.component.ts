import { Component, Input, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cars: CarsService, private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  getCars(){
    return this.cars.getCars();
  }

  getUser(){
    return this.loginservice.getIdToken();
  }

}
