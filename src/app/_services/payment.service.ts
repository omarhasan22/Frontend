import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Stripe } from '@stripe/stripe-js';
import { Observable } from 'rxjs';

const baseUrl = `${environment.apiUrl}/payment`;
const Pbkey=environment.STRIPE_PK_KEY;
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  processPayment(token: string, account:any, amount: number, description: any): Observable<any> {
    return this.http.post(`${baseUrl}/charge`, { source: token, account, amount, description });
  }
}
