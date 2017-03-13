<template>
  <div class="row add-quote">
    <div class="col-xs-8 col-xs-offset-2">
      <h3>Quote</h3>
      <textarea style="width: 100%" rows="5" v-model="newQuote"></textarea> <br/>
      <button type="button" class="btn btn-primary" @click="addQuote">Add Quote</button>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    data() {
      return {
        newQuote: ""
      }
    },
    methods: {
      addQuote() {
        if (this.newQuote) {
          eventBus.addQuote(this.newQuote)
        } 
      }
    }
  }
</script>

<style scope>
.add-quote {
  margin-bottom: 30px;
}
</style>