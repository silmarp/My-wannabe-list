<script setup>
import { ref } from 'vue';

const vIcon = 'star';
const dColor = ref('grey'); // default color
const aColor = ref('yellow'); // color on click
// const vColor = ref(dColor.value);

const dBtmColor = ref('white'); // button color
const aBtmColor = ref('#FF0080'); // button color
// const vBtmColor = ref(dBtmColor.value);

const activated = ref(false);
const vLabel = ref('label');
const vStyle = ref(`background: ${dBtmColor.value}; color: ${aColor.value}`);

function changeColor() {
  activated.value = !activated.value;
  if (activated.value) {
    vStyle.value = ref(`background: ${aBtmColor.value}; color: ${aColor.value}`);
  } else {
    vStyle.value = ref(`background: ${dBtmColor.value}; color: ${dColor.value}`);
  }
}
</script>

<template>
  <q-btn  @click=changeColor :style="vStyle"
   :icon="vIcon" :label="vLabel" stack glossy />
</template>
