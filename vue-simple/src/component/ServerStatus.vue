<template>
  <div class="status">
    <h1>Server Status: {{ status }}</h1>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>