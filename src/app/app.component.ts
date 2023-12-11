import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { AccountService, CartService } from './_services';
import { Account, Role } from './_models';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'app-root',
 templateUrl: 'app.component.html' ,
styleUrls: ['./app.component.css'] })
export class AppComponent implements OnInit {
    Role = Role;
    account?: Account | null;
    numberOfItems:number=0;

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
        // this.numberOfItems=this.cartservice.cart.length;
        // console.log("no from "+this.cartservice.cart)
        //console.log(this.cartservice.cart)
     //console.log("no: "+this.numberOfItems)
    //   console.log("from app :"+this.cartService.accountValue) 
        // console.log(this.card)
        console.log(this.cartService.getCart)
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


      receivedData?: string;

      receiveDataFromChild(data: string) {
        this.receivedData = data;
      }


      
}