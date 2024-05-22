import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../Shared/Ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ingredientForm: FormGroup;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.ingredientForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit() {
    const newingredient = new Ingredient(
      this.ingredientForm.value.name,
      this.ingredientForm.value.amount
    );
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newingredient);
    } else this.slService.onIngredientAdded(newingredient);
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onClear() {
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
