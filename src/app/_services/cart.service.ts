import { Injectable } from '@angular/core';
import { Cart } from '@app/_models/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private cart =  new BehaviorSubject<string | null>(null);
    getCart = this.cart.asObservable();
  constructor() {
    // this.cartSubject = new BehaviorSubject<string | null>(null);
   }

//   private cartSubject: BehaviorSubject<string | null>;
//   //cart:any[]=[];

//   public get accountValue() {
//     return this.cartSubject.value;
// }

// public cartpost(item: string | null){
//   this.cartSubject.next(item);
// }

setCard(item: string){
  this.cart.next(item)
}


}
