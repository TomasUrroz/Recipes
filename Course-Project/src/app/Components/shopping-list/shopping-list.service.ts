import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../Shared/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingreidientsChanged = new EventEmitter<Ingridient[]>()
  constructor() { }

  ingridients: Ingridient[] = [new Ingridient("Apples", 5), new Ingridient("Tomatoes", 2) ]

  onIngridientAdded(ingridient:Ingridient){
    this.ingridients.push(ingridient);
    this.ingreidientsChanged.emit(this.ingridients.slice())
  }

  getIngridients(){
    return this.ingridients.slice();
  }

  addIngridients(ingridients: Ingridient[]){
    this.ingridients.push(...ingridients)
    this.ingreidientsChanged.emit(this.ingridients.slice())
  }
}
