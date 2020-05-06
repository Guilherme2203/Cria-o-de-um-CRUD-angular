import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/service.service';
import { ResponseProduct, ResponseRegister } from '../services/service.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  responseProduct: ResponseProduct;
  response: ResponseRegister;
  
  constructor(public productService: ProductService) { }

  ngOnInit() {
    // this.productService.getProduct()
    // .subscribe(res => this.responseProduct = res)
  }

  createProduct(){
    // this.productService.createRegister({

    // });
  }

}
