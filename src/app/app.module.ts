import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService, CartService } from './_services';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { HeroComponent } from './hero/hero.component';
import { AddParfumeComponent } from './parfumes/add-parfume.component';
import { FirstListComponent } from './parfumes/first-list/first-list.component';
import { ShowATtypeComponent } from './parfumes/show-attype/show-attype.component';
import { PaymentComponent } from './parfumes/payment/payment.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        HeroComponent,
        FirstListComponent,
        ShowATtypeComponent,
        PaymentComponent,
        

    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
         CartService,        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }