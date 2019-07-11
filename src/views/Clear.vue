<template>
    <div class="clear">Score:{{score}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            score : 0
        }
    },
    created(){
        this.score = this.$store.state.score
    }
})
</script>


<style>

</style>
