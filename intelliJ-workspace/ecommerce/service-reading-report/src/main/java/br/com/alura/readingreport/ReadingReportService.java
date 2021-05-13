package br.com.alura.readingreport;

import org.apache.kafka.clients.consumer.ConsumerRecord;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.concurrent.ExecutionException;

public class ReadingReportService {

    private final KafkaDispatcher<User> orderDispatcher = new KafkaDispatcher<>();
    private static final Path SOURCE = new File("src/main/resources/report.txt").toPath();

    public static void main(String[] args) {
        var reportService = new ReadingReportService();
        try(var service = new KafkaService<>(
                ReadingReportService.class.getSimpleName(),
                "ECOMMERCE_USER_GENERATE_READING_REPORT",
                reportService::parse,
                new HashMap<String, String>())) {
            service.run();
        }
    }

    private void parse(ConsumerRecord<String, Message<User>> record) throws ExecutionException, InterruptedException, IOException {
        System.out.println("------------------------------------------");
        System.out.println("Processando relatorio para " + record.value());

        var message = record.value();
        var user = message.getPayload();
        var target = new File(user.getReportPath());
        IO.copyTo(SOURCE, target);
        IO.append(target, "Criado para " + user.getUuid());

        System.out.println("Arquivo criado " + target.getAbsolutePath());
    }
}
