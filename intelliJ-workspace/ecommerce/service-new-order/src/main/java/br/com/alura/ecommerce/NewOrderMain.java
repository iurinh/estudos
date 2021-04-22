package br.com.alura.ecommerce;

import java.math.BigDecimal;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

public class NewOrderMain {

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        var orderDispatcher = new KafkaDispatcher<Order>();
        var emailDispatcher = new KafkaDispatcher<Email>();

        for (int i = 0; i < 10; i++) {
            var userId = UUID.randomUUID().toString();
            var orderID = UUID.randomUUID().toString();
            var amount = new BigDecimal(Math.random() * 5000 + 1);

            var order = new Order(userId, orderID, amount);

            orderDispatcher.send("ECOMMERCE_NEW_ORDER", userId, order);

            var email = new Email("Bem vindo! processando...", "Parabens");
            emailDispatcher.send("ECOMMERCE_SEND_EMAIL", userId, email);
        }
    }

}
