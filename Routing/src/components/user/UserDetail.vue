<template>
<div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <!-- :to="'/userhome/' + $route.params.id + '/edit'" -->
    <router-link 
        tag="button" 
        :to="link"
        class="btn btn-primary">Edit User</router-link>
</div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit', 
                    params: {
                        id: this.$route.params.id
                    }, 
                    query: {
                        locale: 'en', 
                        q: '100'
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter: (to, from, next) => {
            console.log("UserDetail: beforeRouteEnter")
            next()
        }
    }
</script>