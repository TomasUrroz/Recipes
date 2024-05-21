import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './Components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Components/recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { RecipeItemComponent } from './Components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { DropdownDirective } from './Components/Shared/dropdown.directive';
import { ShoppingListService } from './Components/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration(),
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
