<template>
  <div class="row">
    <quote class="col-xs-3" v-for="(quote, index) in bus.quotes">
        <p>{{ quote }}</p>
    </quote>
  </div>
</template>

<script>
  import { eventBus } from '../main'
  import Quote from './Quote.vue'
  
  export default {
    data () {
      return {
        bus: eventBus
      }
    },
    components: {
      'quote': Quote
    }
  }
</script>

<style lang="" scope>
  blockquote {
    cursor: pointer;
    font-family: Arizonia;
  }

  blockquote:hover {
    background: pink;
  }
</style>