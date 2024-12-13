<script setup>
const { quizzList, allQuizs } = useQuizs();
await allQuizs();
</script>

<template>
  <NuxtLayout name="navbar">
    <div>
      <br />
      <section class="flex flex-col gap-5">
        <div v-for="quiz in quizzList">
          {{ quiz.title }}
          <p>Nombre de questions : {{ quiz.questions.length }}</p>
          <button>
            <NuxtLink :to="`/quiz/${quiz.slug}`"> Jouer </NuxtLink>
          </button>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
