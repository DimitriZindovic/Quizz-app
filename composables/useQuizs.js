export default function useQuizs() {
  const quizzList = ref([]);

  const allQuizs = async () => {
    quizzList.value = await queryContent("quiz").find();
  };

  return {
    quizzList,
    allQuizs,
  };
}
