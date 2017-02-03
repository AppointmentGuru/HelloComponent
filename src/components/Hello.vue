<template>
  <div class="hello">
    <img
      @click='sayHello'
      src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import HelloMixin from '../mixins/HelloMixin'
export default {
  name: 'hello',
  mixins: [HelloMixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
