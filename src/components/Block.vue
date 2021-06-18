<template>
  <div v-on:click="clicked">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "block",
  props: ["value", "positionX", "positionY"],
  methods: {
    clicked() {
      this.$emit("hit", [this.positionX, this.positionY]);
    },
  },
};
</script>
<style scoped>
div {
  padding: 5px;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid darkgrey;
  border-radius: 0 25px;
  font-size: 80px;
  font-size: 5rem;
  cursor: pointer;
  animation: border-color 0.5s ease-in-out;
}
div:active {
  border-color: orange;
}
</style>
