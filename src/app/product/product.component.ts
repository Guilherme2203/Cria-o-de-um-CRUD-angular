import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const newTodo = 'new todo'; 
    this.localStorageService.storeOnLocalStorage(newTodo);
  }

}
