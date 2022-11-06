<template>
  <div
    class="bg-white rounded-md border border-slate-200 shadow-lg shadow-slate-200 hover:shadow-slate-300 relative"
  >
    <div class="absolute top-0 right-0 p-4">
      <button
        title="Agregar a favoritos"
        @click.prevent.exact="addMovieToFavorite(props.item.id)"
      >
        <img
          class="w-6 h-6"
          :src="props.item.isFavorite ? '/red-heart.png' : '/white-heart.png'"
          alt="Agregar a favoritos"
        />
      </button>
    </div>
    <div v-if="props.showDelete" class="absolute top-0 left-0 p-4">
      <button
        title="Eliminar del listado"
        @click.prevent.exact="emit('deleteMovie', props.item.id)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            fill-rule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <RouterLink :to="`/details/${props.item.id}`">
      <img
        class="w-full object-contain rounded-t-md"
        :src="props.item.poster_path"
        alt="Black adam"
      />
    </RouterLink>
    <div class="block p-4 mt-2">
      <RouterLink :to="`/details/${props.item.id}`">
        <h4 class="text-lg font-bold text-slate-900 hover:text-cyan-500">
          {{ props.item.title }}
        </h4>
      </RouterLink>
      <h5 class="text-sm text-slate-500">{{ props.item.release_date }}</h5>
    </div>
  </div>
</template>
<script setup>
import { useMovieStore } from "@/stores/movies";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  showDelete: {
    type: Boolean,
    default: () => true,
  },
});
const { addMovieToFavorite } = useMovieStore();
const emit = defineEmits(["deleteMovie"]);
</script>
