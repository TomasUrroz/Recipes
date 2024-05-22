import { ShoppingListService } from './shopping-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingredient[] = [];

  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingridients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingreidientsChanged.subscribe(
      (ingridients: Ingredient[]) => {
        this.ingridients = ingridients;
      }
    );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
