<template>
  <div id="app">
    <header id="header">
      <h1 class="header__title">Hearth stone Quiz</h1>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
