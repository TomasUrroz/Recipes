import { DataStorageService } from './../data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private DSService: DataStorageService) {}
  onSaveData() {
    this.DSService.storeRecipes();
  }

  onFetchData() {
    this.DSService.fetchRecipes().subscribe();
  }
}
