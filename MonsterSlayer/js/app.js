new Vue({
  el: '#app',
  data: {
    showControls: false,
    health: {
      main: 100,
      monster: 100
    }
  },
  computed: {
    mainHealth: function() {
      return {
        "width": this.health.main + '%',
      }
    },
    monsterHealth: function() {
      return {
        "width": this.health.monster + '%'
      };
    }
  },
  methods: {
    calculateAttack: function() {
      var mainAttack = Math.random() * 10;
      var monsterAttack = Math.random() * 10;

      this.health.main -= monsterAttack;
      this.health.monster -= mainAttack;
    }
  }
});


