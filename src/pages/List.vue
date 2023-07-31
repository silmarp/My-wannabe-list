<template>
  <q-page class="column flex-center">
    <div class="q-pa-md" style="max-width: 650px;">

    <q-list bordered>
      <q-item v-for="anime in animes" :key="anime.mal_id" class="q-my-sm"
clickable v-ripple :to="`/animeview/${anime.mal_id}`">
        <q-item-section avatar>
          <q-avatar>
            <img :src=anime.images.jpg.small_image_url>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ anime.title }}</q-item-label>
        </q-item-section>

      </q-item>
    </q-list>
    </div>
  </q-page>
</template>

<script>
import { db } from 'boot/pouchdb';

export default {
  name: 'List',
  data() {
    return {
      list: [],
      animes: [],
    };
  },
  methods: {
    async getLikeds() {
      await db.get('likeds').then((doc) => {
        this.list = doc.mal_ids;
      }).catch(() => {
        db.put({
          _id: 'likeds',
          mal_ids: [],
        });
      });
      this.list.forEach(this.getAnime);
    },
    async getWatcheds() {
      await db.get('watcheds').then((doc) => {
        this.list = doc.mal_ids;
      }).catch(() => {
        db.put({
          _id: 'watcheds',
          mal_ids: [],
        });
      });
      this.list.forEach(this.getAnime);
    },
    async getwantToSee() {
      await db.get('wantToSee').then((doc) => {
        this.list = doc.mal_ids;
      }).catch(() => {
        db.put({
          _id: 'wantToSee',
          mal_ids: [],
        });
      });
      this.list.forEach(this.getAnime);
    },
    getDB() {
      if (this.$route.name === 'Favoritos') {
        this.getLikeds();
      } else if (this.$route.name === 'Quero Assistir') {
        this.getwantToSee();
      } else if (this.$route.name === 'Assistido') {
        this.getWatcheds();
      } else {
        this.$router.push('error');
      }
    },
    async getAnime(id) {
      const url = `https://api.jikan.moe/v4/anime/${String(id)}`;
      const response = await fetch(url);

      // in case of API limit reached, wait 1 sec and try again
      if (response.status === 429) {
        await this.delay(2000);
        this.getAnime(id);
        return;
      }
      const jsonObj = await response.json();
      await this.delay(1000);
      this.animes.push(jsonObj.data);
    },
    delay(ms) {
      const ret = new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
      return ret;
    },
  },
  beforeMount() {
    this.getDB();
  },
  watch: {
    $route: function routeChange() {
      this.list = [];
      this.animes = [];
      this.getDB();
    },
  },
};
</script>
