<template>
  <div class="quiz" v-if="answerCard">
    <div class="hearthstone__card">
      <h1 class="hearthstone__card__before">
        <img :src="answerCard.getImageUrl()" alt />
      </h1>
      <div class="hearthstone__card__option">
        <div class="item" v-for="(item, index) in getOptionList" :key="index">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { Card, CardManager } from "../components/type/Card";

export default Vue.extend({
  data() {
    return {
      cards: [] as any[],
      quizTypes: ["image", "name", "text", "cost"],
      optionCnt: 5,
      answerCard: {} as Card,
      answerIndex: 0 as number,
      optionCards: [] as Card[]
    };
  },
  created() {
    this.startGame()
  },
  methods: {
    startGame(){
      let cardManager = CardManager.getCardManager()

      this.answerIndex = cardManager.getRandom(this.optionCnt)
      this.answerCard = cardManager.getRandomCard()
      this.optionCards = cardManager.getRandomCards(4)
    }
  },
  computed: {
    getOptionList():Card[]{
      let output:Card[] = this.optionCards
      output.splice(this.answerIndex,0,this.answerCard)
      return output
    }
  },
});
</script>
<style scoped>
.quiz {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.hearthstone__card__option {
  width: 300px;
  display: flex;
  flex-direction: column;
}
.hearthstone__card__option .item {
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2em;
}
</style>
