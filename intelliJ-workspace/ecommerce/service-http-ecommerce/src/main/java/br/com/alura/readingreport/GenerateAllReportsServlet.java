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

public class GenerateAllReportsServlet extends HttpServlet {

    private final KafkaDispatcher<String> batchDispatcher = new KafkaDispatcher<>();

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
    }

    @Override
    public void destroy() {
        super.destroy();
        batchDispatcher.close();
    }

    //EXEMPLO: http://localhost:8080/new?email=iuri@email.com&amount=150
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            batchDispatcher.send(
                    "ECOMMERCE_SEND_MESSAGE_TO_ALL_USERS",
                    "ECOMMERCE_USER_GENERATE_READING_REPORT",
                    new CorrelationId(GenerateAllReportsServlet.class.getSimpleName()),
                    "ECOMMERCE_USER_GENERATE_READING_REPORT"
            );

            System.out.println("Enviada geração de relatorio para todos os usuarios.");
            resp.setStatus(HttpServletResponse.SC_OK);
            resp.getWriter().println("Relatorio requisitado.");
        } catch (ExecutionException e) {
            e.printStackTrace();
            throw new ServletException(e);
        } catch (InterruptedException e) {
            e.printStackTrace();
            throw new ServletException(e);
        }
    }
}
