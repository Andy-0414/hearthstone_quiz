<template>
  <button @click="onclick(optionIndex)" :class="'option__button '+(highlight ? 'option__button-highlight':'')">{{text}}</button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    onclick: Function,
    text: String,
    highlight: Boolean,
    optionIndex: Number
  }
});
</script>

<style>
.option__button {
  background: none;
  outline: none;
  border: none;
  border: 2px solid #2c2319;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #2c2319;
  font-size: 1.2em;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
}
.option__button:hover {
  color: white;
  background-color: #2c2319;
}
.option__button-highlight {
  border: 2px solid #fcd237 !important;
  background-color: #fcd237 !important;
  color: white !important;
  transform: scale(1.1) !important;
}

</style>
