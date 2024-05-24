import { NgModule } from '@angular/core';
import { RecipesService } from './Components/recipes/recipes.service';
import { ShoppingListService } from './Components/shopping-list/shopping-list.service';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    provideClientHydration(),
    ShoppingListService,
    RecipesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
