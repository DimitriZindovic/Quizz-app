<script setup>
const props = defineProps({
  questionIndex: {
    type: Number,
    required: true,
  },
});

const { params } = useRoute();
const quiz = await queryContent(`quiz/${params.quiz}`).findOne();
const form = inject("form");
</script>

<template>
  <NuxtLayout name="">
    <div class="w-full max-w-xl mx-auto my-3 p-4 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold mb-4">{{ quiz.title }}</h1>
      <div class="text-lg mb-4">
        Question {{ form.step.value + 1 }} / {{ quiz.questions.length }}
      </div>
      <section class="flex flex-col gap-5">
        <div class="text-xl font-semibold mb-2">
          {{ quiz.questions[questionIndex].question }}
        </div>
        <div
          v-for="(answer, index) in quiz.questions[questionIndex].answers"
          :key="index"
          class="flex justify-center"
        >
          <button
            @click="form.saveAnswer(index)"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            {{ answer }}
          </button>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
