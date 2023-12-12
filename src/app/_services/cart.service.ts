import { Injectable } from '@angular/core';
import { Cart } from '@app/_models/cart';
import { BehaviorSubject } from 'rxjs';
import { Parfume } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

items: Parfume[]=[];

  constructor() {}

  addToCart(perfume :Parfume){
    this.items.push(perfume)
  }

  getItems(){
    return this.items;
  }

  itemsCount(){
    return this.items.length;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

}

