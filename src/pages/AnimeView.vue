<script setup>
import ColorButtom from 'src/components/ColorButtom.vue';
</script>
<template>
  <q-page class="flex flex-center">
    Informações sobre o animes
    <ColorButtom dColor = 'grey' dBtmColor = 'white' aBtmColor = 'purple' aColor = 'yellow' vLabel = 'Favorite'/>
    <ColorButtom/>
    <ColorButtom/>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
