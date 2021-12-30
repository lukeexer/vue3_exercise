<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>{{ greeting }}</h1>
    <h1>{{ product }}</h1>
    <h1>{{ price }}</h1>
    <h1>{{ sellingPrice }}</h1>
    <button @click="setQuantity(qty)">Click</button>
    <div>{{ productInfo }}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      qty: 0
    } 
  },
  computed: {
    ...mapState(['greeting', 'product', 'price', 'quantity', 'productInfo']),
    ...mapGetters(['sellingPrice'])
  },
  methods: {
    ...mapMutations(['setQuantity']),
    ...mapActions(['fetchProductInfo'])
  },
  created() {
    this.fetchProductInfo({id: 1})
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
