import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/service.service';
import { Product } from '../services/service.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {  

  new: Product = {
    code: 0,
    name: '',
    dropdown: '',
    value: '',
    text: ''
  }

  constructor(public localStorageService: LocalStorageService) {}
    
    ngOnInit(): void {
      this.refresh();
    }

    save(){
      this.localStorageService.set(this.new);
      this.refresh()
    }

    refresh(){
      this.new = {
        code: 0,
        name: '',
        dropdown: '',
        value: '',
        text: ''
      };
    }

}
