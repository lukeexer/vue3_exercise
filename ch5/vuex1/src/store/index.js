import { createStore } from 'vuex'

export default createStore({
  state: {
    greeting: 'Hello 008 Vue.js!',
    product: '008-JS',
    price: 500,
    quantity: 100,
    productInfo: ""
  },
  getters: {
    discount(state){
      return (state.quantity > 50) ? 0.8 : 0.9;
    },
    sellingPrice(state, getters) {
      return state.price * getters.discount;
    }
  },
  mutations: {
    setQuantity(state, payload) {
      state.quantity = payload.qty;
    },
    setProductInfo(state, payload) {
      state.productInfo = payload;
    }
  },
  actions: {
    fetchProductInfo(context, payload) {
      fetch('https://jsonplaceholder.typicode.com/users/' + payload.id)
        .then(res => res.json())
        .then(data => context.commit('setProductInfo', data));
    }
  },
  modules: {
  }
})
