package br.com.alura.readingreport;

import java.math.BigDecimal;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

public class NewOrderMain {

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        var orderDispatcher = new KafkaDispatcher<Order>();
        var emailDispatcher = new KafkaDispatcher<Email>();

        var email = Math.random() + "@email.com";
        for (int i = 0; i < 10; i++) {
            var orderID = UUID.randomUUID().toString();
            var amount = new BigDecimal(Math.random() * 5000 + 1);

            var order = new Order(orderID, amount, email);

            orderDispatcher.send("ECOMMERCE_NEW_ORDER", email, order);

            var emailCode = new Email("Bem vindo! processando...", "Parabens");
            emailDispatcher.send("ECOMMERCE_SEND_EMAIL", email, emailCode);
        }
    }

}
