package Services;

import Model.QuestionModel;

import java.util.List;

public class Quiz {
    private List<QuestionModel> quizQuestions;
    private int correctAnswers;
    private int currentQuestion;

    public Quiz() {
        quizQuestions = QuizQuestions.LoadQuestions();
    }

    public int getNumQuestions() {
        return quizQuestions.size();
    }

    public int getNumCorrect() {
        return correctAnswers;
    }

    public String getCurrentQuestion() {
        if (currentQuestion < quizQuestions.size()) {
            return quizQuestions.get(currentQuestion).getQuestion();
        } else {
            return "No question available";
        }
    }

    public int getCurrentQuestionIndex() {
        return currentQuestion;
    }

    public void scoreAnswer(int tried) {
        if(tried == 0 ) correctAnswers+=10;
        else if(tried==1) correctAnswers+=5;
        else correctAnswers+=2;
        currentQuestion++;
    }

    public boolean isCorrect(String answer) {
        return quizQuestions.get(currentQuestion).getRightAnswer().equals(answer);
    }

    public String getCorrectAnswer(){
        if (currentQuestion < quizQuestions.size()) {
            return quizQuestions.get(currentQuestion).getRightAnswer();
        } else {
            return "";
        }
    }

    public void nextQuestion() {
        this.currentQuestion++;
    }

    public boolean done() {
        return quizQuestions.size() == currentQuestion;
    }
}
