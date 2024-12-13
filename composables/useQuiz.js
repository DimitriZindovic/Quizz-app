import { reactive } from "vue";
import { useRouter } from "vue-router";

export default function useQuiz(step, quiz) {
  const values = reactive([]);
  const router = useRouter();

  const nextStep = () => {
    step.value += 1;
  };

  const save = (selectedAnswer) => {
    if (selectedAnswer !== null && selectedAnswer !== undefined) {
      values.push(selectedAnswer);
      nextStep();
    }
  };

  const saveAnswer = (index) => {
    save(index);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const returnQuizList = () => {
    router.push("/");
  };

  const correctAnswers = quiz.questions.map((question) => question.correct);

  const compareAnswers = () => {
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (values[i] === correctAnswers[i]) {
        score++;
      }
    }
    return score;
  };

  return {
    values,
    nextStep,
    save,
    saveAnswer,
    reloadPage,
    returnQuizList,
    correctAnswers,
    compareAnswers,
    step,
  };
}
