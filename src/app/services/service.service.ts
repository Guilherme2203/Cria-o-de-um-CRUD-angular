import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  anotherTodoList = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public set(product: any): void {
    const currentTodoList = this.get('products');
    currentTodoList.push(product);

    this.storage.set('products', currentTodoList);
  }

  public get(name: string) {
    return this.storage.get(name) || [];
  }
}
