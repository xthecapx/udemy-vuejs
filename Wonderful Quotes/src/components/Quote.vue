<template>
    <blockquote class="col-xs-3"  @click="bus.removeQuote(index)">
        <slot></slot>
    </blockquote>
</template>

<script>
  import { eventBus } from '../main'
  import Quote from './Quote.vue'
  
  export default {
    data () {
      return {
        bus: eventBus
      }
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