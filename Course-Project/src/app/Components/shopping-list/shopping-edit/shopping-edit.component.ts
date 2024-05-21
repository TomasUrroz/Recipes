import { ShoppingListService } from '../shopping-list.service';
import { Ingridient } from './../../Shared/ingridient.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;

  constructor(private slService:ShoppingListService){}

  onAddItem() {
    this.slService.onIngridientAdded({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
    });
  }
}
