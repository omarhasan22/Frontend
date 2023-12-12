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



   addCookie(name:any, value:any, options:any) {
    options = options || {};
  
    if (options.expires) {
      // Set the expiration date
      let expires = options.expires;
      if (typeof expires == "number" && expires) {
        const d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
      }
    }
  
    document.cookie = [
      encodeURIComponent(name),
      "=",
      encodeURIComponent(value),
      options.expires ? "; expires=" + options.expires.toUTCString() : "",
      options.path ? "; path=" + options.path : "",
      options.domain ? "; domain=" + options.domain : "",
      options.secure ? "; secure" : "",
      options.samesite ? "; samesite=" + options.samesite : "",
    ].join("");
  }








}

