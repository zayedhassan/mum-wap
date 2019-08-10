package Model;

import Services.Quiz;

public class SessionData {
    public String currentQuestion;
    public boolean error;
    public String answer;
    public int score;
    public int attempt;
    public String hint;
    public String grade;
    public Quiz quiz;
    public int age;

    public void calculateGrade(){
        if(score < 25)
            grade="NC";
        else if(score < 35)
            grade="C";
        else if(score < 45)
            grade="B";
        else grade="A";
    }
}
