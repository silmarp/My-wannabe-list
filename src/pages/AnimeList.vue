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
    <div class="q-pa-md" style="max-width: 350px;">
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

        <q-item-section v-on:click="likeAndUnlike(anime.mal_id)" side>
          <q-icon v-if="likeds.includes(anime.mal_id)" name="favorite_border" color="blue" />
          <q-icon v-else name="favorite_border" color="gray" />
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

<script>
import { db } from 'boot/pouchdb';

export default {
  name: 'AnimeList',

  data() {
    return {
      animes: undefined,
      pagination: undefined,
      page: '1',
      likeds: [],
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
    getLikeds() {
      db.get('likeds').then((doc) => {
        this.likeds = doc.mal_ids;
        console.log('ids');
        console.log(doc.mal_ids);
      }).catch(() => {
        db.put({
          _id: 'likeds',
          mal_ids: [],
        });
      });
    },
    likeAndUnlike(id) {
      console.log(this.likeds.includes(id));
      if (this.likeds.includes(id)) {
        this.likeds = this.likeds.filter((item) => item !== id);
      } else {
        this.likeds.push(id);
        console.log('got here');
      }
      console.log(this.likeds);
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
  },
  beforeMount() {
    this.getLikeds();
    this.getAnimes(1);
  },
};
</script>
