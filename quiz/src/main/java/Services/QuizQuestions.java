package Services;

import Model.QuestionModel;
import java.util.ArrayList;
import java.util.List;

public class QuizQuestions {
    public static List<QuestionModel> LoadQuestions(){
        List<QuestionModel> questions = new ArrayList<QuestionModel>();
        questions.add(new QuestionModel("6 + 3 = ?","9"));
        questions.add(new QuestionModel("2^2", "4"));
        questions.add(new QuestionModel("2 + 3 * 2 = ?", "8"));
        questions.add(new QuestionModel("2 ^ 4 = ?", "16"));
        questions.add(new QuestionModel("3 * 5 = ?", "15"));
        return questions;
    }
}
