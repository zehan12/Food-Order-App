import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      '/assets/food.jpg',
      '/assets/food.jpg',
      '/assets/food.jpg',
      '/assets/food.jpg',
      '/assets/food.jpg',
      '/assets/food.jpg',
      '/assets/food.jpg',
      '/assets/food.jpg'
    ]
  }
}

