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
    
    items?:any[];
    
   // cartCookiesArray = Object.entries(this.items);


    // card?:any;
    constructor(
        private accountService: AccountService,
        private route: ActivatedRoute,
        public cartService: CartService
        ) {
        this.accountService.account.subscribe(x => this.account = x);
        // this.cartService.getCart.subscribe(cart => this.card = cart)
    }
 

    ngOnInit(): void {
    // this.items = this.getItemsFromCookies()
 
    
 // console.log(this.cartService.getItemsFromCookies())
    //   let cartCookies = this.getCookiesWithPrefix('cart');
    //   let itemsFromCookies = this.getItemsFromCookies(cartCookies.map(cookie => cookie.value));
    // //  console.log(itemsFromCookies)
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


      // receivedData?: string;

      // receiveDataFromChild(data: string) {
      //   this.receivedData = data;
      // }

  itemCount(){
    return this.cartService.itemsCount()
  }





  


    
}