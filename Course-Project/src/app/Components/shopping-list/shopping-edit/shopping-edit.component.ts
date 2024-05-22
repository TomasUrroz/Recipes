import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Ingridient } from './../../Shared/ingridient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ingridientForm: FormGroup;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingridient;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingridientForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngridient(index);
        this.ingridientForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit() {
    const newIngridient = new Ingridient(
      this.ingridientForm.value.name,
      this.ingridientForm.value.amount
    );
    if (this.editMode) {
      this.slService.updateIngridient(this.editedItemIndex, newIngridient);
    } else this.slService.onIngridientAdded(newIngridient);
    this.ingridientForm.reset();
    this.editMode = false;
  }

  onClear() {
    this.ingridientForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngridient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
