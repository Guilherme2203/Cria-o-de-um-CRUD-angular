import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/service.service';
import { Product } from '../services/service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  product: Product;
  key: string = '';

  constructor(public localStorageService: LocalStorageService,
              private router: Router) {}

  ngOnInit(): void {
    console.log(this.localStorageService);
    this.refresh();
  }

  add() {
    console.log(this.product);
    this.localStorageService.set(this.product);
    this.refresh();
  }

  refresh() {
    this.products = this.localStorageService.get('products');
  }

  delete(product: Product) {
    this.localStorageService.delete(product);
    this.refresh();
  }

  update(product: Product){
    console.log(product);
    this.refresh();
    this.router.navigate(['register']);
  }
}
