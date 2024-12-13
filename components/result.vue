<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const form = inject("form");

const quiz = await queryContent(`quiz/${route.params.quiz}`).findOne();
</script>

<template>
  <div>
    <p>Score : {{ form.compareAnswers() }} / {{ quiz.questions.length }}</p>
    <button @click="form.reloadPage">Recommencer le quiz</button>
    <button @click="form.returnQuizList">Retour au menu des quiz</button>
  </div>
</template>
