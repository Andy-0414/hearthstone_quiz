<template>
	<div class="quiz" v-if="answerCard">
		<div class="hearthstone__card">
			<h1 class="hearthstone__card__answer">
				<img :class="isImageLoad ? '' : 'loading'" :src="answerCard.getImageUrl()" class="hearthstone__card__answer__image" @load="imageLoadClear" />
			</h1>
			<div class="hearthstone__card__option" v-if="getType == 'name'">
				<OptionButton
					@click="selectAnswer(index)"
					:text="item.name"
					:highlight="isWait && index == answerIndex"
					class="item"
					v-for="(item, index) in getOptionListName"
					:key="index"
				></OptionButton>
			</div>
			<div class="hearthstone__card__option" v-if="getType == 'cost'">
				<OptionButton
					@click="selectAnswer(index)"
					:text="item.toString()"
					:highlight="isWait && index == answerIndex"
					class="item"
					v-for="(item, index) in getOptionListCost"
					:key="index"
				></OptionButton>
			</div>
			<div class="informationPanel">
				<div class="informationPanel__score">
					ROUND : {{ round }}
					<br />
					{{ score }}/{{ getTotalRound }}
				</div>
				<div class="informationPanel__round">
					<div id="roundBar"></div>
					<div id="scoreBar"></div>
				</div>
			</div>
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
			isWait: false,
			isImageLoad: false,
			score: 0,
			round: 0,
			quizTypes: ["image", "name", "text", "cost"],
			answerCard: {} as Card,
			answerIndex: 0 as number,
			optionCards: [] as Card[],
		};
	},
	components: {
		OptionButton,
	},
	created() {
		this.startGame();
	},
	methods: {
		imageLoadClear(): void {
			this.isImageLoad = true;
		},
		startGame(): void {
			if (this.round < this.getTotalRound) {
				this.isImageLoad = false;
				this.round++;
				this.isWait = false;
				let cardManager = CardManager.getCardManager();

				this.answerIndex = cardManager.getRandom(this.getOptionCnt - 1);
				this.answerCard = cardManager.getRandomCard();
				this.optionCards = cardManager.getRandomCards(this.getOptionCnt - 1);
			} else {
				this.$store.commit("setScore", this.score);
				this.$router.push("/clear");
			}
		},
		selectAnswer(index: number): void {
			if (this.isWait == false) {
				this.isWait = true;
				var roundBar: any = document.getElementById("roundBar");
				roundBar.style.width = (this.round / this.getTotalRound) * 100 + "%";
				setTimeout(this.startGame, 500);
				if (index == this.answerIndex) {
					this.score++;
					var scoreBar: any = document.getElementById("scoreBar");
					scoreBar.style.width = (this.score / this.getTotalRound) * 100 + "%";
				} else {
				}
			}
		},
	},
	computed: {
		//TODO: 판정 오류가 있음
		getOptionListName(): Card[] {
			let output: Card[] = this.optionCards;
			output.splice(this.answerIndex, 0, this.answerCard);
			return output;
		},
		getOptionListCost(): number[] {
			let output: number[] = CardManager.getCardManager().getRandomCostExclusion(this.answerCard.cost, this.getOptionCnt - 1);
			output.splice(this.answerIndex, 0, this.answerCard.cost > 0 ? this.answerCard.cost : 0);
			return output;
		},
		getOptionCnt(): number {
			return this.$store.state.quizOption.optionCnt;
		},
		getTotalRound(): number {
			return this.$store.state.quizOption.totalRound;
		},
		getType(): number {
			return this.$store.state.quizOption.type;
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

	position: relative;
}
.hearthstone__card {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.hearthstone__card__answer {
	border: 3px solid #7e7463;
	background-color: #7e7463;
	border-radius: 50%;
	overflow: hidden;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 200px;
	height: 200px;
}
.hearthstone__card__answer img {
	border-radius: 50%;
	transition: 0.2s;
}
.hearthstone__card__answer .loading {
	opacity: 0;
	transform: scale(0);
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
.informationPanel {
	width: 80vw;
	height: 30px;
	margin-top: 30px;
	display: flex;
	align-items: center;
}
.informationPanel__score {
	font-size: 1.5em;
	font-weight: bold;
	color: #2c2319;
}
.informationPanel__round {
	flex: 1;
	width: 100%;
	height: 15px;
	margin-left: 10px;

	display: flex;
	flex-direction: column;
}
.informationPanel__round #roundBar {
	width: 0;
	height: 10px;
	background: #fcd237;

	transition: 0.5s;
}
.informationPanel__round #scoreBar {
	width: 0;
	height: 5px;
	background: #eda115;

	transition: 0.5s;
}
</style>
