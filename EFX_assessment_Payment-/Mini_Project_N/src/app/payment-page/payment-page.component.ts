import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Payment } from '../payment';
import { PaymentService } from '../services/paymentService.service';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})


export class PaymentPageComponent {
   
  constructor(private paymentservice:PaymentService)
  {
      this.paymentservice = this.paymentservice;
  }
 
  
  

 
  products = [
    {
      name: 'Product 1',
      price: 29.99,
      quantity: 1,
      image: 'asserts/download.jpg',  // Image file in the assets folder
    },
    {
      name: 'Product 2',
      price: 149.99,
      quantity: 2,
      image: 'asserts/download2.jpg',  // Same image for this product
    },
  ];

  ;

  totalAmount = this.calculateTotal();

  increaseQuantity(index: number) {
    this.products[index].quantity++;
    this.totalAmount = this.calculateTotal();
  }

  decreaseQuantity(index: number) {
    if (this.products[index].quantity > 1) {
      this.products[index].quantity--;
      this.totalAmount = this.calculateTotal();
    }
  }

  calculateTotal() {
    return this.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  }

  shippingDetails = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    billingAddress: '',
  };

  payment : Payment = {orderId :3, name : "lsdflfs ",email : "doflamingolaw2023@gmail.com",contact : " kekwelkelk",status: "PENDING", amount : this.calculateTotal(), address : "jrejfedf"}
  
   
  payNow(payment: Payment, event: Event): void {
    event.stopPropagation(); // Prevent triggering row click event
    // Add logic to handle the payment action
    this.paymentservice.createPaymentLink(payment).subscribe(data => {
      console.log(data);
    
    })
    
   
  }
}
