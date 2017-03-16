<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters</h1>
                <p>{{ text | toUppercase | toLowercase }}</p>
                <hr>
                <button @click="fruits.push('cristian')">Add new item</button>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruis">{{ fruit }}</li>
                </ul>
                <hr>
            </div>
        </div>
        <app-list></app-list>
    </div>
</template>

<script>
    import List from './List.vue'
    import { fruitMixin } from './fruitMixin'

    export default {
        data() {
            return {
                text: 'Hello there',
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase()
            } 
        },
        components: {
            appList: List
        },
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
