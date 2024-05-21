import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  @Input() recipe: Recipe;

  constructor(private rService:RecipesService){}

  onAddToShoppingList(){
    this.rService.addIngridientsToShoppingList(this.recipe.ingridients);
  }
  
}
