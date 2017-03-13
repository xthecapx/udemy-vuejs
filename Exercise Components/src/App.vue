<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-body></app-body>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'

export default {
    
    components: {
        "app-header": Header,
        "app-body": Body,
        "app-footer": Footer
    }
}
</script>

<style>

</style>
