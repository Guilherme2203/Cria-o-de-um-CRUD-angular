import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/service.service';
import { Product } from '../services/service.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  new: Product = {
    code: 0,
    name: '',
    dropdown: '',
    value: '',
    text: '',
  };

  types = ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Outros'];

  constructor(public localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

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
}
