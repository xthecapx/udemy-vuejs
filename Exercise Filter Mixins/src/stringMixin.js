export const stringMixin = {
  data() {
    return {
      myText: "My Default text",
      myComputedVariable: "My default computed Variable"
    }  
  },
  computed: {
      reverseComputed() {
          return this.myComputedVariable.split("").reverse().join("")
      },
      appendComputed() {
          return this.myComputedVariable + " (" + this.myComputedVariable.length + ")"
      }
  }
}