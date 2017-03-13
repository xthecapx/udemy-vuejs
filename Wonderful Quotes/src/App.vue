<template>
    <div class="container">
        <track-quote></track-quote>
        <add-quote></add-quote>
        <app-quotes></app-quotes>
        <info-quote></info-quote>
    </div>
</template>

<script>
    import TrackQuote from './components/TrackQuote.vue'
    import AddQuote from './components/AddQuote.vue'
    import Quotes from './components/Quotes.vue'
    import InfoQuote from './components/InfoQuote.vue'

    export default {
        components: {
            'track-quote': TrackQuote,
            'add-quote': AddQuote,
            'app-quotes': Quotes,
            'info-quote': InfoQuote
        }
    }
</script>

<style>
</style>
