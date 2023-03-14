import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): any[] {
    return [
      {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: '2',
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 4.7,
        imageUrl: 'assets/food.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: '3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        star: 3.5,
        imageUrl: 'assets/food.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: '4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        star: 3.3,
        imageUrl: 'assets/food.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: '5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        star: 3.0,
        imageUrl: 'assets/food.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: '6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: 'assets/food.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: '7',
        name: 'Spicy Cheese Burger',
        price: 12,
        cookTime: '20-30',
        favorite: false,
        origins: ['Indian'],
        star: 4.0,
        imageUrl: 'assets/food.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: '8',
        name: 'Vegetables Magento Pizza',
        price: 9,
        cookTime: '45-50',
        favorite: false,
        origins: ['indian'],
        star: 4.0,
        imageUrl: 'assets/food.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      }
    ]
  }
}

