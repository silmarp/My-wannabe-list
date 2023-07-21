<script>
export default {
  name: 'AnimeList',
  data() {
    return {
      animes: undefined,
    };
  },
  methods: {
    async getAnimes(page) {
      const url = `https://api.jikan.moe/v4/anime?page=${String(page)}`;
      const response = await fetch(url);
      const jsonObj = await response.json();
      this.animes = jsonObj.data;
      console.log(this.animes);
    },
  },
  beforeMount() {
    this.getAnimes(1);
  },
};
</script>

<template>
  <q-page class="column flex-left">
    <div class="q-pa-md" style="max-width: 350px;">
      <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Anime List</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item v-for="anime in animes" :key="anime.mal_id" class="q-my-sm"
clickable v-ripple to="/animeview">
        <q-item-section avatar>
          <q-avatar>
            <img :src=anime.images.jpg.small_image_url>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ anime.title }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="favorite_border" color="gray" />
        </q-item-section>

        <q-item-section side>
          <q-icon name="visibility" color="gray" />
        </q-item-section>

        <q-item-section side>
          <q-icon name="check_circle" color="gray" />
        </q-item-section>
      </q-item>
    </q-list>
    </div>
  </q-page>
</template>
