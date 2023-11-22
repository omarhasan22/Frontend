import { Component, OnInit } from '@angular/core';

import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    Role = Role;
    account?: Account | null;

    constructor(private accountService: AccountService) {
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


}