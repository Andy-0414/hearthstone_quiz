import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
interface quizOption {
  totalRound: number
  optionCnt: number
}
export default new Vuex.Store({
  state: {
    quizOption: {
      totalRound: 10,
      optionCnt: 5,
      type: "name"
    } as quizOption,
    score: 0
  },
  mutations: {
    setScore(state, score) {
      state.score = score
    },
    setQuizOption(state, quizOption) {
      state.quizOption = quizOption
    }
  },
  actions: {

  },
});
