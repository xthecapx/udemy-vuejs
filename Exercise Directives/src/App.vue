<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <h1 v-my-on:click="myFunction">Click to me</h1>
                <p>{{ counter }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 1
            }  
        },
        directives: {
            "my-on": {
                bind(el, binding, vnode) {
                    if (typeof binding.value == "function") {
                        if( binding.arg ) {
                            el.addEventListener(binding.arg, binding.value)
                        }
                    }
                }
            }
        },
        methods: {
            myFunction() {
                this.counter++
            }
        }
    }
</script>

<style>
</style>
