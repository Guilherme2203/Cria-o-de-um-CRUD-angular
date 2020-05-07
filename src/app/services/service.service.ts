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

  public delete(product: any) {
    const array = this.get('products');

    array.forEach((element, index) => {
      if (element.code === product.code) array.splice(index, 1);
    });

    this.storage.set('products', array);
  }
}
