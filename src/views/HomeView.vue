<template>
  <main class="w-11/12 mx-auto my-5">
    <div class="flex justify-between mb-5 items-center">
      <h1 class="text-2xl font-medium">Listado de peliculas</h1>
    </div>
    <div class="flex gap-x-4">
      <FilterComponent />
      <ContainerComponent />
    </div>
  </main>
</template>

<script setup>
import ContainerComponent from "../components/ContainerComponent.vue";
import FilterComponent from "../components/FilterComponent.vue";
</script>
