package Controller;

import Services.Quiz;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/quiz")
public class QuizServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        PrintWriter out = response.getWriter();
        Quiz quiz = new Quiz();
        if (session.getAttribute("Quiz") != null) quiz = (Quiz)session.getAttribute("Quiz");
        String answer = request.getParameter("answer");

        boolean error = true;
        if ((answer != null) && quiz.isCorrect(answer)) {
            error = false;
            quiz.scoreAnswer();
        }
        session.setAttribute("Quiz", quiz);

        if (quiz.getNumCorrect() == quiz.getNumQuestions()) {
            genQuizOverPage(out);
        } else{
            genQuizPage(quiz, out, quiz.getCurrentQuestion(), error, answer);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        PrintWriter out = response.getWriter();
        Quiz quiz = new Quiz();
        session.setAttribute("Quiz", quiz);
        genQuizPage(quiz, out, quiz.getCurrentQuestion(), true, null);
    }

    private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {
        out.print("<html>");
        out.print("<head>");
        out.print("<title>NumberQuiz</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("<form method='post'>");
        out.print("<h3>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "</br></br>");
        out.print("<p>Guess the next number in the sequence! ");
        out.print(currQuest + "</p>");

        out.print("<input type='hidden' name='quiz' />");
        out.print("<p>Your answer:<input type='text' name='answer' value='' /></p> ");
        if (error && (answer != null)) {
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }
        out.print("<p><input type='submit' name='btnNext' value='Next' /></p> ");

        out.print("</form>");
        out.print("</body></html>");
    }

    private void genQuizOverPage(PrintWriter out) {
        out.print("<html> ");
        out.print("<head >");
        out.print("<title>NumberQuiz is over</title> ");
        out.print("</head> ");
        out.print("<body> ");
        out.print("<p style='color:red'>The number quiz is over!</p><a href=quiz>Start again</a></body> ");
        out.print("</html> ");
    }
}
