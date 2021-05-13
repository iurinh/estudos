package br.com.alura.readingreport;

import org.apache.kafka.clients.consumer.ConsumerRecord;

import java.util.HashMap;
import java.util.concurrent.ExecutionException;

public class EmailService {

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        var emailService = new EmailService();
        try(var service = new KafkaService(
                EmailService.class.getSimpleName(),
                "ECOMMERCE_SEND_EMAIL",
                emailService::parse,
                new HashMap<String, String>())){
            service.run();
        }
    }

    private void parse(ConsumerRecord<String, Message<Email>> record) {
        Message<Email> message = record.value();
        Email email = message.getPayload();

        System.out.println("------------------------------------------");
        System.out.println("Enviado emails");
        System.out.println(record.key());
        System.out.println(record.value());
        System.out.println(record.partition());
        System.out.println(record.offset());

        try {
            System.out.println("Processado emails");
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
