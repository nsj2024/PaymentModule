package com.payment.paymentIntegration.config;

import feign.auth.BasicAuthRequestInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RazorpayClientConfig {

    @Bean
    public BasicAuthRequestInterceptor basicAuthRequestInterceptor() {
        return new BasicAuthRequestInterceptor("rzp_test_KVPSkBodUe3i8K", "Aa6LJGkllrrPXGEoc2HWJRoT");
    }
}
