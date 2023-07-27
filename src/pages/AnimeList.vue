<template>
  <q-page class="column flex-center">
    <div class="q-pa-lg flex flex-center">
      <q-pagination
      v-model="page"
      @input=getAnimes
      :max="pagination.last_visible_page"
      :max-pages="6"
      input
    />
    </div>
    <div class="q-pa-md" style="max-width: 650px;">
      <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Anime List</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item v-for="anime in animes" :key="anime.mal_id" class="q-my-sm"
clickable v-ripple :to="`animeview/${anime.mal_id}`">
        <q-item-section avatar>
          <q-avatar>
            <img :src=anime.images.jpg.small_image_url>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ anime.title }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon v-if="likeds.includes(String(anime.mal_id))"
            name="favorite" class="active" />
          <q-icon v-else name="favorite" class="inactive" />
        </q-item-section>

        <q-item-section  side>
          <q-icon
            v-if="watcheds.includes(String(anime.mal_id))" name="visibility" class="active" />
          <q-icon v-else name="visibility" class="inactive" />
        </q-item-section>

        <q-item-section side>
          <q-icon v-if="wantToSee.includes(String(anime.mal_id))"
            name="check_circle" class="active" />
          <q-icon v-else name="check_circle" class="inactive" />
        </q-item-section>
      </q-item>
    </q-list>
    </div>

  </q-page>
</template>

<style lang="scss">
.active {
  color: $active;
}
</style>

<script>
import { db } from 'boot/pouchdb';

export default {
  name: 'AnimeList',

  data() {
    return {
      animes: undefined,
      pagination: undefined,
      page: 1,
      likeds: [],
      watcheds: [],
      wantToSee: [],
    };
  },
  methods: {
    async getAnimes(page) {
      console.log(page);
      const url = `https://api.jikan.moe/v4/anime?page=${String(page)}`;
      const response = await fetch(url);
      const jsonObj = await response.json();
      this.animes = jsonObj.data;
      this.pagination = jsonObj.pagination;
    },
    async getLikeds() {
      db.get('likeds').then((doc) => {
        this.likeds = doc.mal_ids;
      }).catch(() => {
        db.put({
          _id: 'likeds',
          mal_ids: [],
        });
      });
    },
    likeAndUnlike(id) {
      if (this.likeds.includes(id)) {
        this.likeds = this.likeds.filter((item) => item !== id);
      } else {
        this.likeds.push(id);
      }
      this.updateLikeds();
    },
    updateLikeds() {
      db.get('likeds').then((doc) => {
        db.put({
          _id: 'likeds',
          // eslint-disable-next-line no-underscore-dangle
          _rev: doc._rev,
          mal_ids: this.likeds,
        });
      });
    },
    getWatcheds() {
      db.get('watcheds').then((doc) => {
        this.watcheds = doc.mal_ids;
      }).catch(() => {
        db.put({
          _id: 'watcheds',
          mal_ids: [],
        });
      });
    },
    getwantToSee() {
      db.get('wantToSee').then((doc) => {
        this.wantToSee = doc.mal_ids;
      }).catch(() => {
        db.put({
          _id: 'wantToSee',
          mal_ids: [],
        });
      });
    },
  },

  beforeMount() {
    this.getAnimes(1);
    this.getLikeds();
    this.getWatcheds();
    this.getwantToSee();
  },
};
</script>
