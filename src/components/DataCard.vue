<!--
  TODO: fazer o texto ficar justificado
  TODO: Fazer ficar persitente o status do anime/manga
  TODO: Colocar cores melhores para os botões
  --->
<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" style="max-width=350px">
      <q-img :src=data.images.jpg.image_url>
        <div class="absolute-bottom">
          <div class="text-h6">{{data.title}}</div>

        </div>
      </q-img>
      <q-card-actions class="flex flex-center">
        <q-btn v-if="likeds.includes(id)"
          class="my-buttom" v-on:click=fClick
          style='background: primary; color: purple'
          icon='star'
          label='Favorite' stack glossy
        />
        <q-btn v-else
          class="my-buttom" v-on:click=fClick
          style='background: white; color: grey' icon='star'
          label='Favorite' stack glossy
        />

        <q-btn v-if="watcheds.includes(this.id)"
          class="my-buttom" @click=wClick
          style='background: primary; color: purple' icon='visibility'
        label='Watched' stack glossy/>
        <q-btn v-else
          class="my-buttom" @click=wClick
          style='background: white; color: grey'
          icon='visibility'
        label='Watched' stack glossy/>

        <q-btn v-if="wantToSee.includes(id)"
          class="my-buttom" @click=mClick
          style='background: white; color: purple'
          icon='bookmark'
        :label=this.markLabel stack glossy/>
        <q-btn v-else class="my-buttom" @click=mClick
          style='background: white; color: grey'
          icon='bookmark'
        :label=this.markLabel stack glossy/>

      </q-card-actions>
      <q-card-section class="text-subitle2">
        {{ data.synopsis }}
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
import { db } from 'boot/pouchdb';

export default {
  name: 'Card',
  props: {
    isManga: {
      type: Boolean,
      default: false,
    },
    id: Number,
  },
  data() {
    return {
      data: undefined,
      fStyle: 'background: white; color: grey', // favorite style
      wStyle: 'background: white; color: grey', // watched style
      mStyle: 'background: white; color: grey', // marked to watch style
      markLabel: 'Will',
      fColor: '#ffff00', // favorite icon color when activated
      fBtnColor: 'purple', // favorite buton color when activated
      wColor: '#00e1ff', // favorite icon color when activated
      wBtnColor: '#FF0080', // favorite buton color when activated
      mColor: 'yellow', // favorite icon color when activated
      mBtnColor: 'purple', // favorite buton color when activated
      fActivated: false,
      wActivated: false,
      mActivated: false,
      likeds: [],
      watcheds: [],
      wantToSee: [],
    };
  },
  methods: {
    fClick() {
      this.likeAndUnlike(this.id);
    },

    wClick() {
      this.watchAndUnwatch(this.id);
    },

    mClick() {
      this.wantUnwantToSee(this.id);
    },
    getLikeds() {
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
    watchAndUnwatch(id) {
      if (this.watcheds.includes(id)) {
        this.watcheds = this.watcheds.filter((item) => item !== id);
      } else {
        this.watcheds.push(id);
      }
      this.updateWatcheds();
    },
    updateWatcheds() {
      db.get('watcheds').then((doc) => {
        db.put({
          _id: 'watcheds',
          // eslint-disable-next-line no-underscore-dangle
          _rev: doc._rev,
          mal_ids: this.watcheds,
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
    wantUnwantToSee(id) {
      if (this.wantToSee.includes(id)) {
        this.wantToSee = this.wantToSee.filter((item) => item !== id);
      } else {
        this.wantToSee.push(id);
      }
      this.updatewantToSee();
    },
    updatewantToSee() {
      db.get('wantToSee').then((doc) => {
        db.put({
          _id: 'wantToSee',
          // eslint-disable-next-line no-underscore-dangle
          _rev: doc._rev,
          mal_ids: this.wantToSee,
        });
      });
    },

    async getData() {
      let url = '';
      if (this.isManga) {
        url = `https://api.jikan.moe/v4/manga/${this.id}/full`;
        this.markLabel = 'Will Read';
      } else {
        url = `https://api.jikan.moe/v4/anime/${this.id}/full`;
        this.markLabel = 'Will Watch';
      }
      const response = await fetch(url);
      const jsonObj = await response.json();
      this.data = jsonObj.data;
      console.log('aqui');
      console.log(this.data.mal_id);
    },

    setup() {
      this.fActivated = false;
    },
  },
  beforeMount() {
    this.getData();
    this.getLikeds();
    this.getWatcheds();
    this.getwantToSee();
  },
};

</script>
