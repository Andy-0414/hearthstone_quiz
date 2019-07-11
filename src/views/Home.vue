<template>
  <div class="home">
    <Card class="quizCard" @click="quiz(10)">
      <template slot="content">
        <span class="quizCard__text">
          하스스톤
          <br />10문제
        </span>
      </template>
    </Card>
    <Card class="quizCard" @click="quiz(30)">
      <template slot="content">
        <span class="quizCard__text">
          하스스톤
          <br />30문제
        </span>
      </template>
    </Card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Card from "../components/Card.vue";
export default Vue.extend({
  components: {
    Card
  },
  methods: {
    quiz(totalRound: number) {
      this.$store.commit("setQuizOption", {
        totalRound: totalRound,
        optionCnt: 5
      });
      this.$router.push("/quiz");
    }
  }
});
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
}
.quizCard {
  cursor: pointer;

  width: 300px;
  height: 400px;

  margin: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #7e7463;
  border-radius: 5px;
  color: white;

  transition: 0.2s;
}
.quizCard:hover {
  background-color: #2c2319;
}
.quizCard__text {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
}
</style>
