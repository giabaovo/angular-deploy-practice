import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onSyntheticIngredient(ingredientData: Ingredient) {
    const ingredientName = ingredientData.name
    const found = this.ingredients.find(el => el.name === ingredientData.name)
    if (found) {
      const index = this.ingredients.indexOf(found)
      const duplicateItem = this.ingredients[index]
      duplicateItem.amount += ingredientData.amount
    } else {
      this.ingredients.push(ingredientData)
    }
  }
}
