<script setup>
import { ref } from 'vue';

props: {
    vIcon: String;
    dColor: String;
    aColor: String;
    dBtmColor: String;
    aBtmColor: String;
    vLabel: String;
}
const vStyle = ref(`background: ${dBtmColor}; color: ${aColor}`);

function changeColor() {
  activated.value = !activated.value;
  if (activated.value) {
    vStyle.value = ref(`background: ${aBtmColor}; color: ${aColor}`);
  } else {
    vStyle.value = ref(`background: ${dBtmColor}; color: ${dColor}`);
  }
}
</script>

<template>
  <q-btn  @click=changeColor :style="vStyle"
   :icon="vIcon" :label="vLabel" stack glossy />
</template>
