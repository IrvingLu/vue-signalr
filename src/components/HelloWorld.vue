<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <button @click="start"></button>
    <button @click="close"></button>
  </div>
</template>

<script>
import * as signalr from "../utils/signalr";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    start() {
      var userId="123";
      var companyId="456"
      signalr.start(userId,companyId);
    },
    close() {
      console.log("close");
      signalr.close();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>