<template>
  <div class="quiz" v-if="getRandomCard">
    <div class="hearthstone__card">
      <h1 class="hearthstone__card__before">
        <img :src="`https://art.hearthstonejson.com/v1/256x/${getRandomCard.id}.jpg`" alt />
      </h1>
      <div class="hearthstone__card__option">
        <div class="item" v-for="(item, index) in getRandomOptionCards" :key="index">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      cards: [],
      quizTypes: ["image", "name", "text", "cost"],
      quizTypeBefore: "",
      quizTypeAfter: "",
      randomCardIndex: 0,
      randomOptionCardIndexs: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.hearthstonejson.com/v1/25770/koKR/cards.collectible.json",
      )
      .then((data) => {
        this.cards = data.data;
        this.startGame();
      })
      .catch((err) => {
        console.log("ERR");
      });
  },
  methods: {
    startGame() {
      // TODO: random 함수들 분리
      function getRandom(max: number): number {
        return Math.floor(Math.random() * (max + 1));
      }
      function getRandoms(range: number, count: number): number[] {
        const output = [];
        let _randomIndex;
        while (output.length < count) {
          _randomIndex = getRandom(range);
          if (output.indexOf(_randomIndex) === -1) {
            output.push(_randomIndex);
          }
        }
        return　output;
      }
      const randomIndex1 = getRandom(4);
      this.randomCardIndex = getRandom(this.cards.length);
      this.randomOptionCardIndexs = getRandoms(this.cards.length, 4);

      this.quizType = this.quizTypes[randomIndex1];
    },
  },
  computed: {
    getRandomCard() {
      return this.cards[this.randomCardIndex];
    },
    getRandomOptionCards() {
      const output = [];
      this.randomOptionCardIndexs.forEach((cardIndex) => {
        output.push(this.cards[cardIndex]);
      });
      output.splice(Math.floor(Math.random() * (this.randomOptionCardIndexs.length + 1)), 0, this.getRandomCard);
      return output;
    },
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
.hearthstone__card {
}
.hearthstone__card__before {
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
