package br.com.alura.readingreport;

import org.apache.kafka.clients.producer.Callback;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;

import java.io.Closeable;
import java.util.Properties;
import java.util.concurrent.ExecutionException;

public class KafkaDispatcher<T> implements Closeable {

    private final KafkaProducer<String, Message<T>> producer;

    KafkaDispatcher() {
        this.producer = new KafkaProducer<>(properties());
    }

    private static Properties properties() {
        var prop = new Properties();
        prop.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,"127.0.0.1:9092");
        prop.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        prop.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, GsonSerializer.class.getName());
        prop.setProperty(ProducerConfig.ACKS_CONFIG, "all");
        return prop;
    }

    public void send(String topic, String key, T payload) throws ExecutionException, InterruptedException {
        var value = new Message<>(new CorrelationId(), payload);

        var record = new ProducerRecord<>(topic, key, value);

        Callback callback = (data, ex) -> {
            if (ex != null) {
                ex.printStackTrace();
                return;
            }
            System.out.println("SUCESSO Enviando " + data.topic() + ":::partition " + data.partition());
        };

        producer.send(record, getCallback()).get();
    }

    private static Callback getCallback() {
        return (data, ex) -> {
            if (ex != null)
                ex.printStackTrace();
            else
                System.out.println("SUCESSO "
                        + data.topic()
                        + ":::partition "
                        + data.partition()
                        + "/offset " + data.offset()
                        + "/timestamp " + data.timestamp());
        };
    }

    @Override
    public void close() {
        producer.close();
    }
}
