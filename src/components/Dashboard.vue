<template>
  <div class="container">
    <h1>Turn: {{ currentTurn }}</h1>
    <div v-for="(row, n) in values" :key="n" class="row">
      <div v-for="(box, m) in row" :key="m">
        <block
          :value="box"
          :positionX="n"
          :positionY="m"
          :turn="current"
          @hit="record"
        />
      </div>
    </div>
    <p v-show="result">{{ result }}</p>
    <button @click="resetDash">Reset</button>
  </div>
</template>

<script>
import block from "./Block";

export default {
  name: "sortingOptions",
  data() {
    return {
      values: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      current: true,
      won: "",
    };
  },
  methods: {
    record(position) {
      if (!!this.result || this.values[position[0]][position[1]] !== "") return;
      console.log(!!this.result);
      this.values[position[0]][position[1]] = this.currentTurn;
      this.evaluate();
      this.toggle();
    },
    toggle() {
      this.current = !this.current;
    },
    checkThree() {
      for (let i = 0; i < 3; i++)
        if (
          (this.values[i][0] === this.values[i][1] &&
            this.values[i][1] === this.values[i][2] &&
            this.values[i][1] !== "") ||
          (this.values[0][i] === this.values[1][i] &&
            this.values[1][i] === this.values[2][i] &&
            this.values[1][i] !== "")
        )
          return true;
    },
    evaluate() {
      // Here comes the main logic of tic tac toe
      let tie = true;
      let i = 0;
      for (i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
          if (this.value[i][j] === "") {
            tie = false;
            break;
          }
      if (tie) {
        this.won = "T";
        return;
      }
      if (this.checkThree()) {
        this.won = this.currentTurn;
        return;
      }
      if (
        (this.values[0][0] === this.values[1][1] &&
          this.values[1][1] === this.values[2][2] &&
          this.values[1][1] !== "") ||
        (this.values[2][0] === this.values[1][1] &&
          this.values[1][1] === this.values[0][2] &&
          this.values[1][1] !== "")
      ) {
        this.won = this.currentTurn;
        return;
      }
    },
    resetDash() {
      this.values = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      this.current = true;
      this.won = "";
    },
  },
  components: {
    block,
  },
  computed: {
    currentTurn() {
      return this.current ? "O" : "X";
    },
    result() {
      return this.won !== ""
        ? ["X", "O"].includes(this.won)
          ? `${this.won} Won`
          : "Tie"
        : false;
    },
  },
};
</script>

<style scoped>
.row {
  display: grid;
  grid-template:
    "a a a"
    "b b b"
    "c c c";
}
button {
  margin-top: 15px;
  padding: 3px 25px 3px 25px;
  color: blue;
  background-color: white;
  font-size: 1em;
  outline: none;
}
.container {
  max-width: 400px;
}
</style>
