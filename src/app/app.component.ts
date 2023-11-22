import { Component, OnInit } from '@angular/core';

import { AccountService } from './_services';
import { Account, Role } from './_models';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    Role = Role;
    account?: Account | null;

    constructor(private accountService: AccountService,private route: ActivatedRoute) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    ngOnInit(): void {
     
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





      
}