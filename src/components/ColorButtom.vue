<script>
export default {
  props: {
    aColor: String,
    dColor: String,
    aBtmColor: String,
    dBtmColor: String,
    vIcon: String,
    vLabel: String,
  },
  data() {
    return {
      vStyle: 'background: red; color: blue',
      bActivated: false,
    };
  },
  methods: {
    changeColor() {
      this.bActivated = !this.bActivated;
      if (this.bActivated) {
        this.vStyle = `background: ${this.aBtmColor}; color: ${this.aColor}`;
      } else {
        this.vStyle = `background: ${this.dBtmColor}; color: ${this.dColor}`;
      }
    },
  },
};
</script>

<template>
  <q-btn  @click=changeColor :style= "vStyle"
  :icon="this.vIcon"
  :label="this.vLabel" stack glossy />
</template>
