import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

const baseUrl = `${environment.apiUrl}/payment`;
const Pbkey=environment.STRIPE_PK_KEY;
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  processPayment(token: string, amount: number, description: any, receipt_email:any, billing_details:any ): Observable<any> {
    return this.http.post(`${baseUrl}/charge`, { source: token, amount, description, receipt_email, billing_details });
  }
}
