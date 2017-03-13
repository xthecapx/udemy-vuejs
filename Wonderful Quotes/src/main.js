import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data() {
    return {
      quotes: [
        'My firts Quote'
      ]
    }
  },
  watch: {
    quotes: function(val) {
      if (this.quotes.length > 10) {
        alert("Delete one to continue");
        this.quotes.pop();
      }
    }
  },
  methods: {
    addQuote(quote) {
      this.quotes.push(quote);
      //this.$emit('quoteAdded', quote)
    },
    removeQuote(index) {
      this.quotes.splice(index, 1);
      //this.$emit('quoteRemoved', quote)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
