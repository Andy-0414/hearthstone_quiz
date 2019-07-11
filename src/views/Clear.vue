<template>
    <div class="clear">
        <h1 class="clear__totalScore">{{currentScore}}/{{getTotalRound}}</h1>
        <div class="clear__scoreBar">
            <div id="bar" :style="`width:${currentScore/getTotalRound*100}%`"></div>
        </div>
        <div class="actionList">
            <router-link to="/quiz" style="text-decoration:none;">
                <Card class="actionList__item">
                    <template slot="content">다시하기</template>
                </Card>
            </router-link>
            <router-link to="/" style="text-decoration:none;">
                <Card class="actionList__item">
                    <template slot="content">메인으로</template>
                </Card>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "../components/Card.vue";

export default Vue.extend({
    data() {
        return {
            currentScore: 0
        };
    },
    created() {
        this.startScoreAnimation();
    },
    methods: {
        startScoreAnimation() {
            let loop = setInterval(() => {
                if (this.currentScore < this.getScore) this.currentScore++;
                else clearTimeout(loop);
            }, 50);
        }
    },
    components: {
        Card
    },
    computed: {
        getTotalRound(): number {
            return this.$store.state.quizOption.totalRound;
        },
        getScore(): number {
            return this.$store.state.score;
        }
    }
});
</script>


<style>
.clear {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.clear__totalScore {
    font-size: 4em;
}
.clear__scoreBar {
    width: 300px;
    height: 10px;

    background-color: rgb(126, 116, 99, 0.1);
}
.clear__scoreBar #bar {
    width: 0;
    height: 100%;

    background-color: #eda115;

    transition: 0.4s ease-out;
}
.actionList {
    margin-top: 30px;
    display: flex;
}
.actionList__item {
    cursor: pointer;
    border: none;
    outline: none;
    text-decoration: none;
    background-color: #7e7463;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);

    padding: 10px 40px;
    margin: 20px;
    color: white;
    font-size: 1.2em;

    transition: 0.2s;
}
.actionList__item:hover {
    background-color: #2c2319;
}
</style>
