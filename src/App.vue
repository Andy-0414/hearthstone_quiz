<template>
  <div id="app">
    <header id="header">
      <h1 class="header__title">Hearth stone Card Viewer</h1>
      <nav></nav>
    </header>
    <section id="content">
      <router-view />
    </section>
  </div>
</template>

<style>
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
}
#header {
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  padding: 0px 40px;

  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2)
}
#content {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
}

.header__title{
  font-size: 2em;
}
</style>
