import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/service.service';
import { Product } from '../services/service.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {  

  registers: Product[];

  constructor(private localStorageService: LocalStorageService) {}
    
    ngOnInit(): void {
         const newTodo = 'new todo'; 
         this.localStorageService.storeOnLocalStorage(newTodo);
    }

    storeOnLocalStorage(){
      this.localStorageService.storeOnLocalStorage(this.registers)
    }

}
