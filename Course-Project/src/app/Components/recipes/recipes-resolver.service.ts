import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../Shared/data-storage.service';
import { RecipesService } from './recipes.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private DSService: DataStorageService,
    private rService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.rService.getRecipes();

    if (recipes.length === 0) {
      return this.DSService.fetchRecipes();
    } else return recipes;
  }
}
