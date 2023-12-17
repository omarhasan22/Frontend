import { Injectable } from '@angular/core';
import { Cart } from '@app/_models/cart';
import { BehaviorSubject } from 'rxjs';
import { Parfume } from '@app/_models';
import { ParfumeService } from './parfume.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

items: Parfume[]=[];

  constructor(private parfumeService : ParfumeService) {}

  addToCart(perfume :Parfume){
    
    this.items.push(perfume)
  }

geti(){
 return this.items;
}

  getItems(name:any){
    
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const parts = cookies[i].split("=");
      const cookieName = decodeURIComponent(parts[0]);
      const cookieValue = decodeURIComponent(parts[1]);
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }

  itemsCount(){
    const prefix="cart";
    // return this.items.length;
    const cookies = document.cookie.split("; ");
    let count = 0;
  
    for (let i = 0; i < cookies.length; i++) {
      const parts = cookies[i].split("=");
      const currentCookieName = decodeURIComponent(parts[0]).trim();
  
      if (currentCookieName.length >= 4 && currentCookieName.substring(0, 4) === prefix) {
        count++;
      }
    }
  
    return count;
  }

  // clearCart(){
  //   this.items=[];
  //   return this.items;
  // }


  deleteCookie(name:any){
    this.addCookie(name, "", { expires: -1 });
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

  getCookiesWithPrefix(): { name: string, value: string }[]{
     const prefix ="cart";
    const cookies = document.cookie.split("; ");
    const matchingCookies: { name: string, value: string }[] = [];
  
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
  
      if (cookieName.trim().startsWith(prefix)) {
        matchingCookies.push({ name: cookieName.trim(), value: cookieValue.trim() });
      }
    }
  
    return matchingCookies;
  
}

  // getItemsFromCookies(): any[] {
  //   const cookieValues = this.getCookiesWithPrefix()
  //   const items: any[] = [];
  
  //   for (const value of cookieValues) {
  //     const item = this.parfumeService.getByIdA(value.value)
  //     console.log(value.value)
  //     items.push(item);
  //   }
  
  //   return items;
  // }

  // getItemsFromCookies(): Parfume[] {
  //   const cookieValues = this.getCookiesWithPrefix();
  //   const items: Parfume[] = [];

  //   for (const value of cookieValues) {
  //     const item = this.parfumeService.getById(value.value);
  //     console.log(item.name)
  //     const itemForNgFor: Parfume = {
  //       name: item.name,
  //       company: item.company
  //       // Add more properties as needed
  //     };
  //     items.push(itemForNgFor);
  //   }

  //   return items;
  // }


}

