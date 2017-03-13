<template>
    <div class="col-xs-12 col-sm-6">
        <server :servers="servers"></server>
    </div>
</template>

<script>
import Server from './Server.vue';

export default {
    data() {
        return {
            servers: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Unknown'},
                {id: 4, status: 'Normal'}
            ]
        }
    },
    components: {
        "server": Server
    }
}
</script>

<style>

</style>
