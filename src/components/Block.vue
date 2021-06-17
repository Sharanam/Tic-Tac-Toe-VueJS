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
  padding: 50px;
  text-align: center;
  border: 5px solid black;
}
</style>