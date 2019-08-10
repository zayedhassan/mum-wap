package Controller;

import Model.SessionData;
import Services.Quiz;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/quiz")
public class QuizServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();

        Object obj = session.getAttribute("sdata");
        String answer = request.getParameter("txtAnswer");
        String age = request.getParameter("age");

        if (obj != null) {
            SessionData quiz = (SessionData) obj;
            try {
                int a = Integer.parseInt(age);
                quiz.age = a;
            } catch (Exception e) {
                RequestDispatcher dispatcher = request.getRequestDispatcher("ShowQuestion.jsp");
                dispatcher.forward(request, response);
            }
            if (quiz.age < 4 || quiz.age > 100) {
                RequestDispatcher dispatcher = request.getRequestDispatcher("ShowQuestion.jsp");
                dispatcher.forward(request, response);
            } else {
                if (request.getParameter("btnNext") != null) {

                    quiz.currentQuestion = quiz.quiz.getCurrentQuestion();
                    quiz.score = quiz.quiz.getNumCorrect();
                    quiz.error = false;
                    quiz.answer = answer;
                    quiz.hint = quiz.quiz.getCorrectAnswer();


                    if (answer != null) {
                        if (quiz.quiz.isCorrect(answer)) {
                            quiz.quiz.scoreAnswer(quiz.attempt);
                            quiz.currentQuestion = quiz.quiz.getCurrentQuestion();
                            quiz.score = quiz.quiz.getNumCorrect();
                            quiz.hint = quiz.quiz.getCorrectAnswer();
                            quiz.calculateGrade();
                            quiz.attempt = 0;
                        } else {
                            quiz.attempt++;
                            quiz.error = true;
                            if (quiz.attempt == 3) {
                                quiz.attempt = 0;
                                quiz.quiz.nextQuestion();
                                quiz.currentQuestion = quiz.quiz.getCurrentQuestion();
                            }
                        }
                    }

                } else if (request.getParameter("btnRestart") != null) {
                    quiz.quiz = new Quiz();
                    quiz.currentQuestion = quiz.quiz.getCurrentQuestion();
                    quiz.score = quiz.quiz.getNumCorrect();
                    quiz.error = false;
                    quiz.answer = null;
                    quiz.attempt = 0;
                    quiz.hint = quiz.quiz.getCorrectAnswer();
                    quiz.grade = "NC";
                }
                if (quiz.quiz.done()) {
                    RequestDispatcher dispatcher = request.getRequestDispatcher("Result.jsp");
                    dispatcher.forward(request, response);
                }
            }
        }
        RequestDispatcher dispatcher = request.getRequestDispatcher("ShowQuestion.jsp");
        dispatcher.forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        SessionData quiz = new SessionData();

        quiz.quiz = new Quiz();
        quiz.currentQuestion = quiz.quiz.getCurrentQuestion();
        quiz.score = quiz.quiz.getNumCorrect();
        quiz.error = false;
        quiz.answer = null;
        quiz.attempt = 0;
        quiz.hint = quiz.quiz.getCorrectAnswer();
        quiz.grade = "NC";

        HttpSession session = request.getSession();
        session.setAttribute("sdata", quiz);

        RequestDispatcher dispatcher = request.getRequestDispatcher("ShowQuestion.jsp");
        dispatcher.forward(request, response);
    }

}
