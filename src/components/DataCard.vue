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
        <q-btn class="my-buttom" @click=fClick :style="fStyle" icon='star'
        label='Favorite' stack glossy/>
        <q-btn class="my-buttom" @click=wClick :style="wStyle" icon='visibility'
        label='Watched' stack glossy/>
        <q-btn class="my-buttom" @click=mClick :style="mStyle" icon='bookmark'
        :label=this.markLabel stack glossy/>
      </q-card-actions>
      <q-card-section class="text-subitle2">
        {{ data.synopsis }}
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
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
      fColor: '#E88C0C', // favorite icon color when activated
      fBtnColor: '#0C94E8', // favorite buton color when activated
      wColor: '#FF7D19', // favorite icon color when activated
      wBtnColor: '#19E4FF', // favorite buton color when activated
      mColor: '#E84B0C', // favorite icon color when activated
      mBtnColor: '#0CE8C5', // favorite buton color when activated
      fActivated: false,
      wActivated: false,
      mActivated: false,
    };
  },
  methods: {
    fClick() {
      this.fActivated = !this.fActivated;
      if (this.fActivated) {
        this.fStyle = `background: ${this.fBtnColor}; color: ${this.fColor}`;
        // add to favorite in DB
        console.log(`id ${this.id} colocado na base de dados`);
      } else {
        this.fStyle = 'background: white; color: grey';
        // remove from favorite in DB
      }
    },

    wClick() {
      this.wActivated = !this.wActivated;
      if (this.wActivated) {
        this.wStyle = `background: ${this.wBtnColor}; color: ${this.wColor}`;
        // add to favorite in DB
        console.log(`id ${this.id} colocado na base de dados`);
      } else {
        this.wStyle = 'background: white; color: grey';
        // remove from favorite in DB
      }
    },

    mClick() {
      this.mActivated = !this.mActivated;
      if (this.mActivated) {
        this.mStyle = `background: ${this.mBtnColor}; color: ${this.mColor}`;
        // add to favorite in DB
        console.log(`id ${this.id} colocado na base de dados`);
      } else {
        this.mStyle = 'background: white; color: grey';
        // remove from favorite in DB
      }
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
  },
};

</script>
