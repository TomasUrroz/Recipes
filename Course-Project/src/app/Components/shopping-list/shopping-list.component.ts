import { ShoppingListService } from './shopping-list.service';
import { Component } from '@angular/core';
import { Ingridient } from '../Shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'  
})
export class ShoppingListComponent {
  ingridients: Ingridient[] = []

  constructor(private slService:ShoppingListService){}

  ngOnInit(): void {
    this.ingridients = this.slService.getIngridients();
    this.slService.ingreidientsChanged.subscribe((ingridients:Ingridient[])=>{this.ingridients = ingridients})
  }
}
