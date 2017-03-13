<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
        <button @click="changeAge">Edit Age Fn</button>
        <button @click="changeWithBus">Edit Age eventBus</button>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    props: ['userAge', 'changeAge'],
    methods: {
        editAge() {
            this.userAge = 30;
            this.$emit('ageWasEdited', this.userAge)
        },
        changeWithBus() {
            this.userAge = 30
            //eventBus.$emit('ageWasEdited', this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
