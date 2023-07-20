# My-wannabe-list
https://docs.google.com/document/d/e/2PACX-1vR6yDPgPk19kyZhBF6zQgTQmAw0DFQJ59S0MczZsYKrANUiaUkHCMv71VncahmDz8MaMVdOt3WUMQkG/pub

API -  https://docs.api.jikan.moe/

<script setup>
import { ref } from 'vue';

const animes = ref([]);
const selectedAnime = ref();
const fetchingAnimes = ref(false);

async function fetchAnimes() {
  fetchingAnimes.value = true;
  const fetcher = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await fetcher.json;
  animes.value = data;
  [selectedAnime.value] = animes.value;
  fetchingAnimes.value = false;
}
fetchAnimes();
</script>

<template>
  <q-page class="flex flex-center">
    <q-select
      style="width: 350px"
      :loading="fetchingAnimes"
      v-model="selectedAnime"
      :options="animes"
      option-label="title"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
