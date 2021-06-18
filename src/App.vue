<template>
  <div id="app">
    <dashboard />
  </div>
</template>

<script>
import dashboard from "./components/Dashboard";

export default {
  name: "App",
  components: {
    dashboard,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #82acd6;
  margin-top: 60px;
}
</style>
