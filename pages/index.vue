<script setup>
const { quizzList, allQuizs } = useQuizs();
await allQuizs();
</script>

<template>
  <NuxtLayout name="navbar">
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">Liste des Quiz</h1>
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="quiz in quizzList"
          :key="quiz.slug"
          class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 class="text-2xl font-semibold mb-2">{{ quiz.title }}</h2>
          <p class="text-gray-600 mb-4">
            Nombre de questions : {{ quiz.questions.length }}
          </p>
          <NuxtLink
            :to="`/quiz/${quiz.slug}`"
            class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Jouer
          </NuxtLink>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
