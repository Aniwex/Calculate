<template>
  <div class="block">
    <div class="block__row-input">
      <div class="block__element-input">
        <input type="text" v-model="main_input" class="block__contant-input" />
      </div>
    </div>
    <div class="block__row">
      <button
        v-for="(num, index) in array_number"
        :key="index + Math.random()"
        @click="input(num)"
        class="block__element"
      >
        <div class="block__contant">{{ num }}</div>
      </button>
      <button class="block__element">
        <div @click="clear" class="block__contant">C</div>
      </button>
      <button
        v-for="(operator, index) in array_operator"
        :key="index"
        @click="input(operator)"
        class="block__element"
      >
        <div class="block__contant">{{ operator }}</div>
      </button>

      <button @click="result" class="block__element">
        <div class="block__contant">=</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      main_input: "",
      array_number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      array_operator: ["+", "-", "*", "/"],
    };
  },
  methods: {
    clear() {
      this.main_input = "";
    },
    input(num) {
      this.main_input += num;
    },
    result() {
      this.main_input = eval(this.main_input);
    },
  },
};
</script>

<style>
</style>