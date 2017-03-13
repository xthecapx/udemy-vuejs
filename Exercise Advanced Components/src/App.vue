<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button 
                    class="btn btn-primary" 
                    @click="componentId = 'appBlue'"
                    >Load Blue Template</button>
                <button 
                    class="btn btn-success"
                    @click="componentId = 'appGreen'"
                    >Load Green Template</button>
                <button 
                    class="btn btn-danger"
                    @click="componentId = 'appRed'"
                    >Load Red Template</button>
                <hr>
                <component :is="componentId">
                    <h1 slot="blue">My Parent Blue Title</h1>      
                    <h1 slot="green">My Parent Green Title</h1>    
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                componentId: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
