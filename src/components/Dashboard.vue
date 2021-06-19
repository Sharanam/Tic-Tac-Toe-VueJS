<template>
  <div>
    <div class="container">
      <h1>Tic Tac Toe</h1>
      <h2 class="status">
        <span v-if="result" class="result">
          Result:
          {{ result }}
        </span>
        <span v-else> Turn: {{ currentTurn }} </span>
      </h2>
      <div v-for="(row, n) in values" :key="n" class="row">
        <div v-for="(box, m) in row" :key="m">
          <cell
            :value="box"
            :positionX="n"
            :positionY="m"
            :turn="current"
            @hit="record"
          />
        </div>
      </div>
      <button @click="clear">
        <h3>Clear</h3>
      </button>
    </div>
    <scoreboard :score="score" />
  </div>
</template>

<script>
import cell from "./Cell";
import scoreboard from "./Scoreboard";

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
      score: { O: 0, X: 0 },
    };
  },
  methods: {
    record(position) {
      if (!!this.result || this.values[position[0]][position[1]] !== "") return;
      this.values[position[0]][position[1]] = this.currentTurn;
      this.evaluate();
      this.toggle();
    },
    toggle() {
      this.current = !this.current;
    },
    checkStraight() {
      // check horizontal and vertical
      for (let i = 0; i < 3; i++)
        if (
          (this.values[i][1] !== "" &&
            this.values[i][0] === this.values[i][1] &&
            this.values[i][1] === this.values[i][2]) ||
          (this.values[1][i] !== "" &&
            this.values[0][i] === this.values[1][i] &&
            this.values[1][i] === this.values[2][i])
        )
          return true;
      return false;
    },
    checkDiagonal() {
      // check cells in diagonals
      if (
        (this.values[1][1] !== "" &&
          this.values[0][0] === this.values[1][1] &&
          this.values[1][1] === this.values[2][2]) ||
        (this.values[1][1] !== "" &&
          this.values[2][0] === this.values[1][1] &&
          this.values[1][1] === this.values[0][2])
      )
        return true;
      return false;
    },
    evaluate() {
      // Here comes the main logic of tic tac toe

      let tie = true; // initially tie will be true
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++)
          if (this.values[i][j] === "") {
            tie = false; // if any cell is blank, no tie
            break;
          }
        if (!tie) break;
      }
      if (this.checkStraight() || this.checkDiagonal()) {
        this.won = this.currentTurn;
        this.score[this.currentTurn]++;
        return;
      }
      if (tie) this.won = "T";
    },
    clear() {
      this.values = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      this.won = "";
    },
  },
  components: {
    cell,
    scoreboard,
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
  gap: 10px;
}
h1 {
  text-align: center;
  margin-bottom: 15px;
  font-size: 3em;
}
button {
  margin-top: 15px;
  padding: 3px 25px 3px 25px;
  color: rgb(210, 30, 90);
  background-color: rgb(28, 31, 46);
  font-size: 1.5em;
  outline: none;
  border-radius: 5px;
  border: 0px solid white;
  cursor: pointer;
  animation: border 3s ease-in-out;
}
button:active {
  border: 1px solid white;
}
.container {
  max-width: 400px;
  margin: auto;
}
.status {
  color: lightskyblue;
  font-size: 1.7em;
}
.result {
  color: orangered;
}
</style>
