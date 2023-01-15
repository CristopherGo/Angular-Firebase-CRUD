import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car.model'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private id: number = 0;

  constructor(private r: Router, private route: ActivatedRoute, private car: CarsService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    let c: Car = this.car.getCarsForId(this.id);
    this.brand = c.getBrand();
    this.model = c.getModel();
    this.hp = c.getHp();
    this.price = c.getPrice();
    this.type = c.getType();
    this.img = [c.getImg(0), c.getImg(1), c.getImg(2)];
  }

  brand: string = '';
  model: string = '';
  hp: string = '';
  price: string = '';
  img: string[] = [];
  type: string = '';

  back() {
    this.r.navigate([''])
  }

  updateCar() {
    let auto = new Car(this.brand, this.model, this.price, this.type, this.hp, this.img[0], this.img[1], this.img[2]);
    this.car.updateCars(auto, this.id);
    this.car.loadToDatabase()
    alert('Updated Successful!')
  }
}
