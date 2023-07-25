<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { db } from 'boot/pouchdb';

export default {
  name: 'PageIndex',
  methods: {
    dbinfo() {
      db.info().then((info) => {
        console.log(info);
      });
    },
  },
  beforeMount() {
    this.dbinfo();
  },
};
</script>
