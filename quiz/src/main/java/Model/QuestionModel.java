package Model;

public class QuestionModel {
    private String Question;
    private String RightAnswer;

    public QuestionModel(String question, String rightAnswer) {
        Question = question;
        RightAnswer = rightAnswer;
    }

    public String getQuestion(){
        return Question;
    }
    public String getRightAnswer() {
        return RightAnswer;
    }

}
