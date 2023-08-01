<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{ this.$route.name }}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'AniList',
    caption: 'List of animes',
    icon: 'list',
    link: { path: '/' },
  },
  {
    title: 'Favoritos',
    caption: 'Animes marked as favorites',
    icon: 'favorite',
    link: { path: '/listas/fav' },
  },
  {
    title: 'Quero Assistir',
    caption: 'Animes marked as want to see',
    icon: 'visibility',
    link: { path: '/listas/wanttosee' },
  },
  {
    title: 'Assistido',
    caption: 'Animes marked as watched',
    icon: 'bookmark',
    link: { path: '/listas/seen' },
  },
  {
    title: 'AboutUs',
    caption: 'Information about the app and creators',
    icon: 'code',
    link: { path: '/aboutus' },
  },

];

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
  },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};

</script>
