<template>
  <NuxtLayout name="navbar">
    <div class="flex flex-col items-center justify-center mt-20 bg-gray-100">
      <h1 class="text-4xl font-bold text-red-600 mb-4">Page introuvable</h1>
      <p class="text-lg text-gray-700 mb-6">
        La page que vous recherchez n'existe pas.
      </p>
      <NuxtLink
        to="/"
        class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Retour à l'accueil
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
