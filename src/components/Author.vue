<template>
  <div>
    <p>
      Author:
      <a href="https://github.com/Sharanam" target="_blank">Sharanam Chotai</a>,
      <a
        href="https://github.com/Sharanam/Tic-Tac-Toe-VueJS/tree/master/src"
        target="_blank"
        >Source Code</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Author",
};
</script>

<style scoped>
div {
  margin-top: 20px;
}
a {
  text-decoration: none;
  color: darkturquoise;
}
::selection {
  color: white;
}
a::selection {
  color: red;
}
</style>
