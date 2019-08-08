import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int plus1 = Integer.parseInt(request.getParameter("plus1")!= "" ? request.getParameter("plus1") : "0") ;
        int plus2 = Integer.parseInt(request.getParameter("plus2")!= "" ? request.getParameter("plus2") : "0") ;
        double multi1 =  Double.parseDouble(request.getParameter("multi1")!= "" ? request.getParameter("multi1") : "0") ;
        double multi2 =  Double.parseDouble(request.getParameter("multi2")!= "" ? request.getParameter("multi2") : "0") ;
        int plus = plus1 + plus2;
        double multi = multi1*multi2;
        request.setAttribute("plus1",plus1);
        request.setAttribute("multi1",  multi1);
        request.setAttribute("plus2", plus2);
        request.setAttribute("multi2",  multi2);
        request.setAttribute("plus", plus);
        request.setAttribute("multi", multi);
        request.getRequestDispatcher("/index.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
