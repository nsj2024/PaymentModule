import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../payment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8080/payments';

  constructor(private http : HttpClient) { }

   
  createPaymentLink (payment : Payment) : Observable <string>
  {
    const url= `${this.baseUrl}/create`;
    return this.http.post<string>(url, payment);
  }
}
