import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { AccountService, CartService, ParfumeService } from './_services';
import { Account, Role } from './_models';
import { ActivatedRoute } from '@angular/router';
import { first, pipe } from 'rxjs';

@Component({ selector: 'app-root',
 templateUrl: 'app.component.html' ,
styleUrls: ['./app.component.css'] })
export class AppComponent implements OnInit {
    Role = Role;
    account?: Account | null;
   // items=this.showItems("cart");
    
    cart?:any[];
    
   // cartCookiesArray = Object.entries(this.items);


    // card?:any;
    constructor(
        private accountService: AccountService,
        private route: ActivatedRoute,
        public cartService: CartService
        ) {
        this.accountService.account.subscribe(x => this.account = x);
        // this.cart = this.cartService.getCart();
        // console.log(this.cart)
        // this.cartService.getCart.subscribe(cart => this.card = cart)
    }
 

    ngOnInit(): void {
      this.cartService.getCartObservable().subscribe((cart) => {
        this.cart = cart;
      });
      this.cart = this.cartService.getCart();
}



    logout() {
        this.accountService.logout();
    }

    isLoggedIn(){
        if(this.account!=null) return true
        else return false
    }

    // isRegisterRoute(): boolean {
    //     // // Get the current route's path
    //     // const currentPath = this.route.snapshot.routeConfig?.path;
    
    //     // // Check if the current route is "account/register"
    //     // return currentPath === 'account/register'

    //   }


       isRegisterRoute(): boolean {
        let isAccountRegister = false;
    
        this.route.url.subscribe(urlSegments => {
          const currentRoute = urlSegments.map(segment => segment.path).join('/');
          isAccountRegister = currentRoute.includes('account/register');
        });
    
        return isAccountRegister;
      }





      
  itemCount(){
    return this.cartService.getCartItemCount()
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.cart = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cart = [];
  }

  increaseQuantity(item:any){
    this.cartService.increaseQuantity(item)
  }

isEmpty(): boolean{
const cart=this.cartService.getCart();
  return cart.length === 0;
}

  


    
}