package br.com.alura.readingreport;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

public class NewOrderServlet extends HttpServlet {

    private final KafkaDispatcher<Order> orderDispatcher = new KafkaDispatcher<>();
    private final KafkaDispatcher<Email> emailDispatcher = new KafkaDispatcher<>();

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
    }

    @Override
    public void destroy() {
        super.destroy();
        orderDispatcher.close();
        emailDispatcher.close();
    }

    //EXEMPLO: http://localhost:8080/new?email=iuri@email.com&amount=150
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        var email = req.getParameter("email");
        var amount = new BigDecimal(req.getParameter("amount"));

        var orderID = UUID.randomUUID().toString();
        var order = new Order(orderID, amount, email);

        try {
            orderDispatcher.send(
                    "ECOMMERCE_NEW_ORDER",
                    email,
                    new CorrelationId(NewOrderServlet.class.getSimpleName()),
                    order
            );

            var emailCode = new Email("Bem vindo! processando...", "Parabens");
            emailDispatcher.send(
                    "ECOMMERCE_SEND_EMAIL",
                    email,
                    new CorrelationId(NewOrderServlet.class.getSimpleName()),
                    emailCode
            );

            System.out.println("Processo de compra finalizado com sucesso.");
            resp.setStatus(HttpServletResponse.SC_OK);
            resp.getWriter().println("Processo de compra finalizado com sucesso.");
        } catch (ExecutionException e) {
            e.printStackTrace();
            throw new ServletException(e);
        } catch (InterruptedException e) {
            e.printStackTrace();
            throw new ServletException(e);
        }
    }
}
