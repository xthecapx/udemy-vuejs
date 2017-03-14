<template>
<div>
    <div class="form-group">
        <label for="name">First Name</label>
        <input
                type="text"
                id="name"
                class="form-control"
                @input="firstnameChange"
                :value="username.firts">
    </div>
    <div class="form-group">
        <label for="lastname">Last Name</label>
        <input
                type="text"
                id="lastname"
                class="form-control"
                @input="lastnameChange"
                :value="username.last">
    </div>
</div>
</template>

<script>
  export default {
    props: {
      username: {
        type: Object,
        default() {
          return {
            "firts": "default",
            "last": "default"
          }
        }
      }
    },
    methods: {
      firstnameChange(event) {
        this.username['firts'] = event.target.value;
        this.$emit("input", this.username)
      },
      lastnameChange(event) {
        this.username['last'] = event.target.value;
        this.$emit("input", this.username)
      }
    }
  }
  
</script>