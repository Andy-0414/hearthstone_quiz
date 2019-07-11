<template>
  <div class="quiz" v-if="answerCard">
    <div class="hearthstone__card">
      <h1 class="hearthstone__card__answer">
        <img :src="answerCard.getImageUrl()" class="hearthstone__card__answer__image" />
      </h1>
      <div class="hearthstone__card__option">
        <OptionButton
          :onclick="selectAnswer"
          :optionIndex="index"
          :text="item.name"
          :highlight="wait && index==answerIndex"
          class="item"
          v-for="(item, index) in getOptionList"
          :key="index"
        ></OptionButton>
      </div>
      <div class="informationPanel"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import OptionButton from "../components/OptionButton.vue";
import { Card, CardManager } from "../components/type/Card";

export default Vue.extend({
  data() {
    return {
      cards: [] as any[],
      wait: false,
      score: 0,
      quizTypes: ["image", "name", "text", "cost"],
      optionCnt: 5,
      answerCard: {} as Card,
      answerIndex: 0 as number,
      optionCards: [] as Card[]
    };
  },
  components: {
    OptionButton
  },
  created() {
    this.startGame();
  },
  methods: {
    startGame() {
      this.wait = false;
      let cardManager = CardManager.getCardManager();

      this.answerIndex = cardManager.getRandom(this.optionCnt);
      this.answerCard = cardManager.getRandomCard();
      this.optionCards = cardManager.getRandomCards(4);
    },
    selectAnswer(index: number) {
      if (this.wait == false) {
        this.wait = true;
        setTimeout(this.startGame, 1000);
        if (index == this.answerIndex) {
          this.score++;
        } else {
        }
      }
    }
  },
  computed: {
    getOptionList(): Card[] {
      let output: Card[] = this.optionCards;
      output.splice(this.answerIndex, 0, this.answerCard);
      return output;
    }
  }
});
</script>
<style scoped>
.quiz {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}
.hearthstone__card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hearthstone__card__answer {
  border: 3px solid #7e7463;
  border-radius: 50%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
}
.hearthstone__card__option {
  width: 300px;
  display: flex;
  flex-direction: column;
}
.hearthstone__card__option .item {
  width: 100%;
  height: 50px;

  margin: 10px 0;
}
.informationPanel{
  width: 80vw;
  height: 30px;
  margin-top: 30px;

  background-color: #7e7463;
}
</style>