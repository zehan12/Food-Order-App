import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/Foods';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;
  constructor(private activateRoute: ActivatedRoute, private foodService:FoodService) {
    activateRoute.params.subscribe((params)=>{
      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
    })
  }
  ngOnInit(): void {

  }
}
