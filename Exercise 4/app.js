new Vue({
  el: '#exercise',
  data: {
    effect: false,
    userClass: '',
    firstClass: '',
    validate: false,
    color: 'red',
    width: 0
  },
  methods: {
    startEffect: function() {
      this.effect = !this.effect;
    },
    startProgress: function() {
      var vm = this,
          time;
      
      function updateProgress() {
        vm.width += 10;
        time = setTimeout(updateProgress, 1000);
        if (vm.width == 100) {
          clearTimeout(time);
          return false;
        }
      }

      updateProgress();
    }
  },
  computed: {
    myClasses: function() {
      return {
        "red": true,
        "btn-small": true
      }
    },
    booleanClass: function() {
      return this.validate ? 'boolean-class' : '';
    },
    setMyColor: function() {
      return {
        backgroundColor: this.color
      };
    },
    progressClass: function() {
      console.log(this.width);
      return {
        "red": 0 < this.width && this.width <= 40 ,
        "yellow": 40 < this.width && this.width <= 80,
        "green": 80 < this.width && this.width <= 100
      };
    }
  }
});
