<script setup>
import { ref, provide } from "vue";
import { useRoute } from "vue-router";

const step = ref(0);
provide("step", step);

const { params } = useRoute();
const quiz = await queryContent(`quiz/${params.quiz}`).findOne();
const totalSteps = quiz.questions.length;

const form = useQuiz(step, quiz);
provide("form", form);
</script>

<template>
  <div>
    <QuestionForm v-if="step < totalSteps" :questionIndex="step" />
    <Result v-if="step >= totalSteps" />
  </div>
</template>
