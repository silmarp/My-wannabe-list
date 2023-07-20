<template>
  <q-page class="flex flex-center">
    LISTA DE MANGAS AQUI
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
      const response = fetch(url);
      this.mangas = await response.json().data;
      console.log(this.mangas);
    },
  },
};
</script>
