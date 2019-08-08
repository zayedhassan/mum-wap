package controller;

import models.BeerModel;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/beer")
public class BeerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("Beer Selection Advice<br/>");
        String c = request.getParameter("color");
        out.println("<br>Got beer color " + c);

        BeerModel beerModel = new BeerModel();
        List<String> result = beerModel.getBrands(c);

        for (int i = 0; i < result.size(); i++) {
            out.print("<br>try : " + result.get(i));
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Beer Advisor</title></head><body>");
        out.print("<h1 align='center'>Beer Selection Page</h1>");
        out.print("<form method='post'");
        out.print("action='SelectBeer.do'>");
        out.print("<p>Select beer characteristics</p>");
        out.print("Color:");
        out.print("<select name='color' size='1'>");
        out.print("<option value='light'>light</option>");
        out.print("<option value='amber'>amber</option>");
        out.print("<option value='brown'>brown</option>");
        out.print("<option value='dark'>dark</option>");
        out.print("</select>");
        out.print("<br><br>");
        out.print("<center>");
        out.print("<input type='submit' value='Submit'/>");
        out.print("</center>");

        out.print("</form>");
    }
}
