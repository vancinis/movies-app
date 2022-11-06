<template>
  <nav
    class="isolate inline-flex -space-x-px rounded-md shadow-sm mt-5"
    aria-label="Pagination"
  >
    <button
      v-if="Number(props.options.page) > 1"
      @click.prevent="goTo({ page: Number(props.options.page) - 1 })"
      class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
    >
      <span class="sr-only">Anterior</span>
      <!-- Heroicon name: mini/chevron-left -->
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <span
      aria-current="page"
      class="relative z-10 inline-flex items-center border border-cyan-500 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-600 focus:z-20"
      >{{ props.options.page }}</span
    >
    <button
      v-if="Number(props.options.totalPages) > Number(props.options.page)"
      class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
      @click.prevent="goTo({ page: Number(props.options.page) + 1 })"
    >
      <span class="sr-only">Siguiente</span>
      <!-- Heroicon name: mini/chevron-right -->
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </nav>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  options: {
    type: Object,
    default: () => {
      return {
        page: 1,
        totalPages: 1,
      };
    },
  },
});

const $route = useRoute();
const $router = useRouter();

const goTo = (query = {}) => {
  $router.push({
    path: "/",
    query: {
      ...$route.query,
      ...query,
    },
  });
};
</script>
