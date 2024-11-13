package com.payment.paymentIntegration.service;

import com.payment.paymentIntegration.client.RazorpayClient;
import com.payment.paymentIntegration.dto.RazorpayRequest;
import com.payment.paymentIntegration.dto.RazorpayResponse;
import com.payment.paymentIntegration.entity.Orders;
import com.payment.paymentIntegration.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class PaymentService {
    @Autowired
    private RazorpayClient razorpayClient;

    @Autowired
    private OrderRepository orderRepository;
    public RazorpayResponse createPaymentLink(Orders ord) {

        String phoneNumber = ord.getContact();
        String name = ord.getName();
        RazorpayRequest request = new RazorpayRequest();
        request.setAmount(ord.getAmount()*100);
        request.setExpire_by(Instant.now().getEpochSecond() + 45 * 60); // Expiry time is 45 minutes from now
        request.setReference_id("yeu"+ord.getOrderId());

        RazorpayRequest.Customer customer = new RazorpayRequest.Customer();
        customer.setName(name);
        customer.setContact("+91"+phoneNumber);
        customer.setEmail(ord.getEmail());
        request.setCustomer(customer);

        request.setDescription("-----------Payment Link-----------");

        return razorpayClient.createPaymentLink(request);
    }
}
