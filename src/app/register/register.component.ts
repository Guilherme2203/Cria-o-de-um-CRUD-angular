import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/service.service';
import { Product } from '../services/service.model';
import { ServicesDataService } from '../services/services-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  product: Product;
  key: string = '';
  
  new: Product = {
    code: null,
    name: '',
    dropdown: '',
    value: '',
    text: '',
  };

  types = ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Outros'];

  constructor(public localStorageService: LocalStorageService,
    private _servicesDataService: ServicesDataService) {}

  ngOnInit() {
    this.new = new;
    this.newRegister();
  }

  newRegister() {
    if (this._servicesDataService.productAtual == null) return;

    this._servicesDataService.productAtual.subscribe((data) => {
      if (!data.product || !data.key) return;
      this.new = this.setValues(this.product, data.product);
      this.key = data.key;
    });
  }

  save() {
    this.localStorageService.set(this.new);
    this.refresh();
  }

  refresh() {
    this.new = {
      code: 0,
      name: '',
      dropdown: '',
      value: '',
      text: '',
    };
  }

  public onChange(event): void {
    console.log(event.target.value);
    this.new.dropdown = event.target.value;
  }

  setValues(origin, destiny) {
    for (let [key, value] of Object.entries(origin)) {
      destiny[key] = value;
    }
    return destiny;
  }
}
