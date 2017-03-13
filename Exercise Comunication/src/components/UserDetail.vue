<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="ResetName()">Reset de Name</button>
        <button @click="resetFn()">Reset de Name by Function</button>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    props: {
        name: {
            type: String,
            //required: true,
            default: 'Default'
            /*type: Object,
            default: function() { return { name: 'Max'} }*/
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        switchName() {
            return this.name.split("").reverse().join("");
        },
        ResetName() {
            this.name = 'Max';
            this.$emit('nameWasReset', this.name);
        }
    },
    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
