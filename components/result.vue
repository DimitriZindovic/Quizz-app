<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const form = inject("form");

const quiz = await queryContent(`quiz/${route.params.quiz}`).findOne();
</script>

<template>
  <div class="w-full max-w-xl mx-auto my-3 p-4 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold mb-4">{{ quiz.title }}</h1>
    <p class="text-lg mb-4">
      Score : {{ form.compareAnswers() }} / {{ quiz.questions.length }}
    </p>
    <div class="flex justify-between">
      <button
        @click="form.reloadPage"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Recommencer le quiz
      </button>
      <button
        @click="form.returnQuizList"
        class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300"
      >
        Retour au menu des quiz
      </button>
    </div>
  </div>
</template>
