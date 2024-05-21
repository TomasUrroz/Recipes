import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingridient } from '../Shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  constructor(private slService:ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'test d',
      'https://www.eatingwell.com/thmb/yMc-omrZge4WvdofEtjNWSVHG10=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chicken-piccata-casserole-3x2-167-f44730f489cc4b9493547de1c76a3b93.jpg',
      [new Ingridient("Meat",1), new Ingridient("xd",5)]
    
      ),
    new Recipe(
      'Testito',
      'tes',
      'https://hips.hearstapps.com/hmg-prod/images/goulash-vertical-64de8d216ea51.jpg',
      [new Ingridient("Meat",41), new Ingridient("xdddd",25)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngridientsToShoppingList(ingridients:Ingridient[]){
    this.slService.addIngridients(ingridients)
  }

  getRecipe(id:number){
    return this.recipes[id]

  }
}
