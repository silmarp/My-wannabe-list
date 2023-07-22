<!--
  TODO: Receber o ID do anime clicado
-->
<script setup>
import DataCard from 'src/components/DataCard.vue';
</script>
<template>
  <q-page class="flex flex-center">
    <DataCard :isManga="false" :id="$route.params.id" />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
