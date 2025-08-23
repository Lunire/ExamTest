import { Injectable } from '@angular/core';
import jsonData from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class Coffee {
  coffee = jsonData.Coffee;

  getAll() {
    return this.coffee;
  }

  getByType(typeName: string) {
    return this.coffee.filter((c: any) => c.TypeProduct.TypeName === typeName);
  }
}