import { Component } from '@angular/core';
import { Ingridient } from '../Shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingridients: Ingridient[] = [new Ingridient("Apples", 5), new Ingridient("Tomatoes", 2) ]

  onIngridientAdded(ingridient:Ingridient){
    this.ingridients.push(ingridient);
  }
}
