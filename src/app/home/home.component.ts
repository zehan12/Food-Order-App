import { Component, OnInit } from '@angular/core';
import { FoodService } from '../sevices/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private fs: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // this will search item from params 
      if (params['searchItem']) {
        this.foods = this.fs.getAll().filter((food) => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      // it will this display whole list of items
      } else {
        this.foods = this.fs.getAll();
      }
    })
  }
}
