import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeServerStatus(server) {
      this.$emit('serverUpdated', server)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
