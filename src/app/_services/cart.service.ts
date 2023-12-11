import { Injectable } from '@angular/core';
import { Cart } from '@app/_models/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private cart =  new BehaviorSubject<string | null>(null);
    private c:any[]=[];
    getCart = this.c;

    

  constructor() {}

// //   private cartSubject: BehaviorSubject<string | null>;
// //   //cart:any[]=[];

  public get accountValue() {
    // return this.getCart;
    return this.c;
}

public setCart(item: string){
  // this.cart.next(item)
  this.c.push(item)
}


}
