new Vue({
  el: '#app',
  data: {
    showControls: false,
    health: {
      main: 100,
      monster: 100
    },
    attacks: {
      basic: 10,
      special: 20
    },
    logs: [],
    myClass: 'title',
    messages: {
      start: 'Battle Start',
      monster: {
        basic: 'Basic Attack, damage done to Main: ',
        special: 'Special Attack, damage done to Main: ',
        heals: 'Monster is healing: '
      },
      main: {
        basic: 'Basic attack, damage done to Monster:  ',
        special: 'Special Attack, damage done to Monster: ',
        heals: 'Main is healing: '
      }
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
    gameLogic: function(option) {

      // Main Logic
      //this.logs.push("Main turn");
      this.gameOptions(option, 'main');

      //Monster Logic
      //this.logs.push("Monster turn");
      var monsterOption = Math.round(Math.random()) * 2;
      this.gameOptions(monsterOption, 'monster');

      this.checkWinner();

    },
    setClasses: function(main, monster, message) {
      this.class.main = main;
      this.class.monster = monster;
      this.class.message = message;
    },
    gameOptions: function(option, character) {
      var duel = character == 'main' ? 'monster' : 'main';

      switch(option) {
        case 0: {
          this.characterHeals(character);
          break;
        }
        case 1: {
          this.characterAttack(duel, character, this.attacks.basic);
          break;
        }
        case 2: {
          this.characterAttack(duel, character, this.attacks.special);
          break;
        }
      }
    },
    checkWinner: function() {
      if ( this.health.monster <= 0) {
        alert("Main win");
      } else if ( this.health.main <= 0 ) {
        alert("Monster win");
      }
    },
    battleStart: function() {
      this.showControls = true;
      //this.logs.push(this.messages.start);
    },
    characterAttack: function(character, logTo, times) {
      var attack = Math.round(Math.random()) * times + 10;
      this.health[character] -= attack;

      if (times == this.attacks.basic) {
        this.logger(logTo, 'basic', attack);
      } else if (times == this.attacks.special) {
        this.logger(logTo, 'special', attack);
      }
      
    },
    characterHeals: function(character) {
      this.health[character] += 10;
      this.logger(character, 'heals', 10);
    },
    logger: function(character, type, attack) {
        this.logs.push(this.messages[character][type] + attack);
    },
    giveUp: function() {
      this.health.main = 0;

      this.checkWinner();
    }
  }
});


