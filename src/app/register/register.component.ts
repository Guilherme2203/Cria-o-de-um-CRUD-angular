import { Component, OnInit } from '@angular/core';
import { ResponseRegister } from '../services/service.model';
import { ProductService } from '../services/service.service';
import { Register } from '../services/service.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {  

  request: Register = {
    code: 1,
    name: '',
    dropdown: '',
    value: '',
    text: ''
  }

  registers: Register[];

  response: ResponseRegister;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.registers = this.productService.getProduct();
  }

  save(){
    this.productService.createRegister(this.request)
    .subscribe(res =>{
      this.response = res;
    });
  }

}
