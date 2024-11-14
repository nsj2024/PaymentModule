import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../payment';

interface StatusDto{
  orderId:number,
  status:string
}
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http : HttpClient) { }
  
  createOrder (order : Payment){
    const url= `${this.baseUrl}/orders`;
    return this.http.post<any>(`${url}`,order)
  }
  
  changeStatus (id:number, status:string) : Observable <any>
  {
    const url = `${this.baseUrl}/orders/status` 
    let statusDto:StatusDto = {
      orderId: id,
      status: status
    }
    return this.http.put<any>(url,statusDto)
  }

  createPaymentLink (payment : Payment) : Observable <any>
  {
    const url= `${this.baseUrl}/payments/create`;
    return this.http.post<any>(url, payment);
  }
}
