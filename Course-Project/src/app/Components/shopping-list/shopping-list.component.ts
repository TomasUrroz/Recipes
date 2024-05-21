import { ShoppingListService } from './shopping-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingridient } from '../Shared/ingridient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingridient[] = []

  private igChangeSub: Subscription;

  constructor(private slService:ShoppingListService){}

  ngOnInit(): void {
    this.ingridients = this.slService.getIngridients();
    this.igChangeSub = this.slService.ingreidientsChanged.subscribe((ingridients:Ingridient[])=>{this.ingridients = ingridients})
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
