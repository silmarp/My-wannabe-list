<script setup>
    import ColorButtom from './ColorButtom.vue';
</script>

<template>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-img src="cardImage">
          <div class="absolute-bottom">
            <div class="text-h6">name</div>
          </div>
        </q-img>

        <q-card-actions>
            <ColorButtom/>
            <ColorButtom/>
            <ColorButtom/>
        </q-card-actions>
      </q-card>
    </div>
  </template>
