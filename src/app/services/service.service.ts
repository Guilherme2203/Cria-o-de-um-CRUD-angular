import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseProduct, Register, ResponseRegister } from './service.model';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:4200/product"; 
  
  constructor(private http: HttpClient) { }

  getProduct(): Observable<ResponseProduct>{
    return this.http.get<ResponseProduct>(this.url);
  }

  createRegister(request: Register): Observable<ResponseRegister>{
    return this.http.post<ResponseRegister>(this.url, request);
  }
}
