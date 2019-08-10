<%@ page import="Model.SessionData" %><%--
  Created by IntelliJ IDEA.
  User: zayed
  Date: 8/10/2019
  Time: 12:14 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>NumberQuiz</title>
</head>
<body>
<%SessionData sdata=(SessionData)session.getAttribute("sdata"); %>
<form method='post' action="quiz">
    <h3>Have fun with NumberQuiz!</h3>
    <p>Your current score is <%= sdata.score %>.</p>
    <p>Attempt <%= sdata.attempt %> / 3 </p
    <label>Enter Age:</label>
    <input type="text" name="age" value="<%= sdata.age%>">
    <%if (sdata.age <4 || sdata.age >100) {%>
    <p style='color:red'>Enter proper age (4 to 100)</p>
    <% } %>
    <p>Enter the answer for the given equation! <br/><br/>
        <%= sdata.currentQuestion %> </p>

    <p>Your answer:<input type='text' name='txtAnswer' value=''/></p>
    <p><input type='submit' name='btnNext' value='Next'/>
        <input type='submit' name='btnRestart' value='Restart!'/>
    </p>

    <%if (sdata.attempt > 0) {%>
    <p style='color:red'>Your last answer was not correct! Please try again</p>
    <% } %>
    <p><input type="button" name='btnHint' value='Hint?' onclick="alert('<%= sdata.hint %>')"/>
    </p>

</form>
</body>
</html>

