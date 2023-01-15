import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private car:CarsService, private router:Router) { }

  ngOnInit(): void {
  }

  add(form: NgForm){
    let c = new Car(form.value.marca, form.value.modelo, form.value.precio, form.value.tipo, form.value.potencia, form.value.img1, form.value.img2, form.value.img3); 
    this.car.addCars(c);
    this.car.loadToDatabase();
    alert('Vehiculo agregado!')

  }

  back(){
    this.router.navigate(['']);
  }
}
