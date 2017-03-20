<template>
    <div class="user">
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    </div>
</template>

<script>
    export default {
        /*data() {
            return {
                id: this.$route.params.id
            }
        },*/
        props: {
            id: {
                type: String,
                default: "No data URL"
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push({path: '/'})
            }
        }/*,
        watch: {
            '$route'(to, from) {
                this.id = to.params.id
            }
        }*/
    }
</script>