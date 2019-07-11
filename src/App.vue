<template>
  <div id="app">
    <header id="header">
      <h1 class="header__title">HearthStrone Quiz</h1>
      <nav></nav>
    </header>
    <section id="content">
      <transition name="page">
        <router-view />
      </transition>
    </section>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
@font-face {
    font-family: YD;
    src: url("./assets/2002.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
}
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
* {
font-family: 'Nanum Gothic', sans-serif;
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
  align-items: center;
  padding: 0px 40px;

  color: white;
  background-color: #eda115;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
}
#content {
  position: relative;
  width: 100%;
  flex: 1;
}

.header__title {
  font-size: 2em;
}
</style>
