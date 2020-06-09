<template>
	<div id="app">
		<header id="header">
			<h1 class="header__title" @click="gotoHearthstoneQuiz">
				하스스톤 랜덤 퀴즈
			</h1>
			<p>라운드({{ round }}): <input type="range" v-model="round" min="3" max="30" /></p>
		</header>
		<section id="content">
			<transition name="page">
				<router-view />
			</transition>
		</section>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	data() {
		return {
			round: 10,
		};
	},
	watch: {
		round() {
			this.$store.state.round = this.round;
		},
	},
	methods: {
		gotoHearthstoneQuiz() {
			this.$router.replace("/");
		},
	},
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");

.page-enter-active,
.page-leave-active {
	position: absolute;
	top: 0;
	left: 0;
	transition: 0.5s;
}
.page-enter {
	opacity: 0;
}
.page-leave-to {
	transform: scale(1.1);
	opacity: 0;
}

::-webkit-scrollbar {
	width: 5px;
}
::-webkit-scrollbar-track {
	background-color: rgba(125, 115, 98, 0.2);
}
::-webkit-scrollbar-thumb {
	background: #fcd237;
}

* {
	font-family: "Nanum Gothic", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	margin: 0;
	padding: 0;

	box-sizing: border-box;
}
#app {
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	overflow: hidden;
}
#header {
	width: 100%;
	height: 70px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 40px;

	color: white;
	background-color: #eda115;
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
}
#content {
	flex: 1;
	position: relative;
	width: 100%;
	overflow: hidden;
	overflow-y: scroll;
}

.header__title {
	font-size: 2em;
}
</style>
