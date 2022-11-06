<template>
  <div class="w-1/4">
    <div
      class="bg-white rounded-md border border-slate-200 p-4 shadow-lg shadow-slate-200"
    >
      <h2 class="font-medium text-lg text-center">Mostrar</h2>
      <ul role="list" class="px-2 py-3 text-slate-900">
        <li class="items-center flex">
          <input
            id="all"
            type="radio"
            name="filter"
            class="h-4 w-4 accent-cyan-500"
            value=""
            v-model="currentSelected"
          />
          <label
            for="all"
            class="block px-2 py-3 text-sm"
            :class="currentSelected === '' ? 'text-cyan-500 font-medium' : ''"
            >Todos</label
          >
        </li>
        <li class="items-center flex">
          <input
            id="favorites"
            type="radio"
            name="filter"
            class="h-4 w-4 accent-cyan-500"
            value="favorites"
            v-model="currentSelected"
          />
          <label
            for="favorites"
            class="block px-2 py-3 text-sm"
            :class="
              currentSelected === 'favorites' ? 'text-cyan-500 font-medium' : ''
            "
            >Solo favoritos</label
          >
        </li>
      </ul>
      <h2 class="font-medium text-lg text-center">Categoria</h2>
      <ul role="list" class="px-2 py-3 text-slate-900">
        <li
          v-for="(category, index) in movieStore.categories"
          :key="index"
          class="items-center flex"
        >
          <input
            :id="category.id"
            type="radio"
            name="category"
            class="h-4 w-4 accent-cyan-500"
            :value="category.id"
            v-model="currentSelected"
          />
          <label
            :for="category.id"
            class="block px-2 py-3 text-sm"
            :class="
              currentSelected === category.id ? 'text-cyan-500 font-medium' : ''
            "
            >{{ category.name }}</label
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useMovieStore } from "@/stores/movies";
const movieStore = useMovieStore();

const { getCategories } = movieStore;
const $router = useRouter();
const $route = useRoute();
const currentSelected = ref($route.query?.category || "");

getCategories();

watch(
  () => currentSelected.value,
  () => {
    $router.push({
      path: "/",
      query: {
        ...$route.query,
        category: currentSelected.value,
      },
    });
  }
);
</script>
