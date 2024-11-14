import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { PaymentService } from '../services/paymentService.service';

@Component({
  selector: 'app-paystatus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paystatus.component.html',
  styleUrl: './paystatus.component.css'
})
export class PaystatusComponent {

  constructor(private route:ActivatedRoute, private paymentService : PaymentService){}
  status:boolean = true
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      console.log(params.get("razorpay_payment_link_status"))
      if(params.get('razorpay_payment_link_status') == "paid"){
          console.log(params.get("razorpay_payment_link_reference_id"))
          this.status = true
          let i = params.get("razorpay_payment_link_reference_id")?.slice(3)
          this.paymentService.changeStatus(Number(i),"SUCCESS").subscribe(d => console.log(d))
      }
      else{
        console.log(params.get("razorpay_payment_link_reference_id"))
        this.status = false
        let i = params.get("razorpay_payment_link_reference_id")?.slice(3)
        this.paymentService.changeStatus(Number(i),"FAILED").subscribe(d => console.log(d))
      }
    });
  }


}
