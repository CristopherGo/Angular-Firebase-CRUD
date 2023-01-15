import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private router: ActivatedRoute, private car: CarsService) { }

  private id: number = 0;
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
  }

  getUrlImg(i: number): string {

    return this.car.getCarsForId(this.id).getImg(i);

  }

}
