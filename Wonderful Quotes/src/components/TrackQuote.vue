<template>
  <div class="row">
    <div class="col-xs-12">
      <h1>Quotes Added</h1>
      <div class="progress">
        <div class="progress-bar" :style="{'width': quotes.length * 10 + '%'}">
          <p>{{quotes.length}} / 10</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    data() {
      return {
        quotes: eventBus.quotes
      }
    }
  }
</script>