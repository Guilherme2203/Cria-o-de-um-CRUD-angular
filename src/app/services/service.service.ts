import { Injectable } from '@angular/core';
import { Product } from './service.model';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]; 
  
  constructor() {
    this.products = [];
   }

  getProduct(){
    return this.products;
  }

  createRegister(){
    this.products.push();
  }
}
