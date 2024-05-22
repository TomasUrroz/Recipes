import { Injectable } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingreidientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  constructor() {}

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 2),
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingreidientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients.slice()[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingreidientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingreidientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1)
    this.ingreidientsChanged.next(this.ingredients.slice());
  }
}
