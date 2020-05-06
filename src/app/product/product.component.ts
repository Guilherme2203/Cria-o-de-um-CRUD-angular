import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/service.service';
import { ResponseProduct, ResponseRegister } from '../services/service.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  responseProduct: ResponseProduct;
  response: ResponseRegister;
  
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.localStorageService.getProduct()
    .subscribe(res => this.responseProduct = res)
  }

}
