package com.payment.paymentIntegration.controller;

import com.payment.paymentIntegration.entity.Orders;
import com.payment.paymentIntegration.service.OrderService;
import com.payment.paymentIntegration.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<String> createPaymentLink(
            @RequestBody Orders orders) {

        return ResponseEntity.ok().body(paymentService.createPaymentLink(orders).getShort_url());
    }
}
