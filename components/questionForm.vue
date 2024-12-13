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
    <div class="w-full max-w-xl mx-auto my-3">
      <h1>{{ quiz.title }}</h1>
      <div>
        Question {{ form.step.value + 1 }} / {{ quiz.questions.length }}
      </div>
      <br />
      <section class="flex flex-col gap-5">
        <div>{{ quiz.questions[questionIndex].question }}</div>
        <div
          v-for="(answer, index) in quiz.questions[questionIndex].answers"
          :key="index"
        >
          <button @click="form.saveAnswer(index)">
            {{ answer }}
          </button>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
