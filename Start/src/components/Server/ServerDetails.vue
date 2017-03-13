<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p>Server id: {{id}}</p>
        <p>Server status: {{status}}</p>
    </div>

</template>

<script>
import { eventBus } from '../../main'

export default {
    data() {
        return {
            id: "Unknown",
            status: "Unknown"
        }
    },
    created() {
        eventBus.$on('serverUpdated', (server) => {
            this.id = server.id
            this.status = server.status
        });
    }
}

</script>

<style>

</style>
