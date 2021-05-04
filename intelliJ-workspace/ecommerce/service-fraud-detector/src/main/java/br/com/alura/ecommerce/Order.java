package br.com.alura.ecommerce;

import java.math.BigDecimal;

public class Order {
    private final String email, orderId;
    private final BigDecimal amount;

    public Order(String orderId, BigDecimal amount, String email) {
        this.email = email;
        this.orderId = orderId;
        this.amount = amount;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String toString() {
        return "Order{" +
                "email='" + email + '\'' +
                ", orderId='" + orderId + '\'' +
                ", amount=" + amount +
                '}';
    }
}
