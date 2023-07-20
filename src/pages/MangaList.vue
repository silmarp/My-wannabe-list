<template>
  <q-page class="flex flex-center">
    <ul id="example-1">
      <li v-for="manga in mangas" :key="manga.mal_id">
        {{ manga.title }}
      </li>
    </ul>
  </q-page>
</template>

<script>
export default {
  name: 'MangaList',
  data() {
    return {
      mangas: undefined,
    };
  },
  methods: {
    async getMangas() {
      const url = 'https://api.jikan.moe/v4/manga';
      const response = await fetch(url);
      const jsonObj = await response.json();
      this.mangas = jsonObj.data;
    },
  },
  beforeMount() {
    this.getMangas();
  },
};
</script>
