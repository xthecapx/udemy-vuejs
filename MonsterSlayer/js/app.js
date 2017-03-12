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
      this.gameOptions(option, 'main');

      //Monster Logic
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
        if (confirm("You won!!!", "Do you want to play again?")) {
            this.battleStart();
        } else {
          this.showControls = false;
        }
      } else if ( this.health.main <= 0 ) {
        if (confirm("You lose!!!", "Do you want to play again?")) {
            this.battleStart();
        } else {
          this.showControls = false;
        }
      }

    },
    battleStart: function() {
      this.showControls = true;
      this.logs = [];
      this.health.main = 100;
      this.health.monster = 100;
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
      if (this.health[character] <= 90) {
        this.health[character] += 10;
        this.logger(character, 'heals', 10);
      } else {
        this.health[character] = 100;
        this.logs.push(character + " is full Health");
      }
      
    },
    logger: function(character, type, attack) {
        this.logs.push(this.messages[character][type] + attack);
    },
    giveUp: function() {
      this.logs = [];
      this.showControls = false;
    }
  }
});


