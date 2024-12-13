<template>
  <main>
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink
          to="/"
          class="text-2xl font-bold hover:text-gray-200 transition-colors duration-300"
        >
          Quiz
        </NuxtLink>
      </div>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </main>
</template>
