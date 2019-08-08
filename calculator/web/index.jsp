<%--
  Created by IntelliJ IDEA.
  User: zayed
  Date: 8/7/2019
  Time: 2:01 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  <form action = "CalculatorServlet" method = "POST">
    <input type="number" name="plus1"  value='<%=request.getAttribute("plus1")%>'> + <input type="number" name="plus2" value='<%=request.getAttribute("plus2")%>'>=<input type="number" name="plus" value='<%=request.getAttribute("plus")%>'><br>
    <input type="number" name="multi1" value='<%=request.getAttribute("multi1")%>'> * <input type="number" name="multi2" value='<%=request.getAttribute("multi2")%>'>=<input type="number" name="multi" value='<%=request.getAttribute("multi")%>'><br>
    <button type="submit">Submit</button>
  </form>
  <c:if test="${not empty message}">
    <h1>${message}</h1>
  </c:if>
  </body>
</html>
