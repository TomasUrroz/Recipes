import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../Shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'test d',
      'https://www.eatingwell.com/thmb/yMc-omrZge4WvdofEtjNWSVHG10=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chicken-piccata-casserole-3x2-167-f44730f489cc4b9493547de1c76a3b93.jpg',
      [new Ingredient('Meat', 1), new Ingredient('xd', 5)]
    ),
    new Recipe(
      'Testito',
      'tes',
      'https://hips.hearstapps.com/hmg-prod/images/goulash-vertical-64de8d216ea51.jpg',
      [new Ingredient('Meat', 41), new Ingredient('xdddd', 25)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
