import { Injectable } from '@angular/core';
import { Ingridient } from '../Shared/ingridient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingreidientsChanged = new Subject<Ingridient[]>();
  startedEditing = new Subject<number>();
  constructor() {}

  ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 2),
  ];

  onIngridientAdded(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
    this.ingreidientsChanged.next(this.ingridients.slice());
  }

  getIngridients() {
    return this.ingridients.slice();
  }

  getIngridient(index: number) {
    return this.ingridients.slice()[index];
  }

  addIngridients(ingridients: Ingridient[]) {
    this.ingridients.push(...ingridients);
    this.ingreidientsChanged.next(this.ingridients.slice());
  }

  updateIngridient(index: number, newIngridient: Ingridient) {
    this.ingridients[index] = newIngridient;
    this.ingreidientsChanged.next(this.ingridients.slice());
  }

  deleteIngridient(index:number){
    this.ingridients.splice(index,1)
    this.ingreidientsChanged.next(this.ingridients.slice());
  }
}
