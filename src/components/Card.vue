<template>
  <div class="card" @click="$emit('click')">
      <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style>
.card {
  padding: 10px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
}
</style>
