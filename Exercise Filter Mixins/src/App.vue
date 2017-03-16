<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h1>{{ myText | reverseOrder}}</h1>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h1>{{ myText | appendLength }}</h1> 

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <h1>{{ reverseComputed }}</h1>
                <h2>{{ appendComputed }}</h2>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { stringMixin } from './stringMixin'
    export default {
        data() {
            return {
                myText: "Cristian",
                myComputedVariable: "Marquez"
            }  
        },
        filters: {
            reverseOrder(value) {
                return value.split("").reverse().join("")
            }
        },
        mixins: [stringMixin]
    }
</script>

<style>
</style>
