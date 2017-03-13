<template>
  <ul class="list-group">
    <li
            class="list-group-item"
            v-for="server in servers">
        <p>Server id: {{ server.id }} ({{ server.status }})</p>
        <button @click="changeStatusServer(server)">Change Status</button>
    </li>
  </ul>
</template>

<script>
import { eventBus } from '../../main'

export default {
    props: ['servers'],
    methods: {
      changeStatusServer(server) {
        server.status = 'Normal'
        eventBus.changeServerStatus(server)
      }
    }
}
</script>

<style>

</style>
