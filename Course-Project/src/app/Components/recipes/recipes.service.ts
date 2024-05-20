import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe("Test", "test d", "https://www.eatingwell.com/thmb/yMc-omrZge4WvdofEtjNWSVHG10=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chicken-piccata-casserole-3x2-167-f44730f489cc4b9493547de1c76a3b93.jpg"),
    new Recipe("Testito", "tes", "https://hips.hearstapps.com/hmg-prod/images/goulash-vertical-64de8d216ea51.jpg")
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  
}
