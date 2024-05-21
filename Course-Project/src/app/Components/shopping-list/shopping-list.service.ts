import {Injectable } from '@angular/core';
import { Ingridient } from '../Shared/ingridient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingreidientsChanged = new Subject<Ingridient[]>()
  constructor() { }

  ingridients: Ingridient[] = [new Ingridient("Apples", 5), new Ingridient("Tomatoes", 2) ]

  onIngridientAdded(ingridient:Ingridient){
    this.ingridients.push(ingridient);
    this.ingreidientsChanged.next(this.ingridients.slice())
  }

  getIngridients(){
    return this.ingridients.slice();
  }

  addIngridients(ingridients: Ingridient[]){
    this.ingridients.push(...ingridients)
    this.ingreidientsChanged.next(this.ingridients.slice())
  }
}
