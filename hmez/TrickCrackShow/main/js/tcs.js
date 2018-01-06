//TTT/TCS from bluewingtitan
var oTS = document.getElementById('onTurnStatement');

var tcs = {
  loadField: null,
  cField: 0,
  onTurn: 1,
  fields: [
    document.getElementById('f11'), document.getElementById('f12'), document.getElementById('f13'),
    document.getElementById('f21'), document.getElementById('f22'), document.getElementById('f23'),
    document.getElementById('f31'), document.getElementById('f32'), document.getElementById('f33')
  ],
  entitys: [
    'n', 'n', 'n',
    'n', 'n', 'n',
    'n', 'n', 'n'
  ],
  teams: [
    'n', 'n', 'n',
    'n', 'n', 'n',
    'n', 'n', 'n'
  ],
  render: function() {
    tcs.cField = 0;
    while (tcs.cField < 10) {
      tcs.fieldRender();
    }
    if (tcs.onTurn === 1) {
      tcs.onTurn = 2;
      oTS.innerHTML = 'Spieler Schwarz ist an der Reihe';
    } else {
      tcs.onTurn = 2;
      oTS.innerHTML = 'Spieler Weiss ist an der Reihe';
    }
  },
  fieldRender: function() {
    tcs.loadField = tcs.fields[tcs.cField];
    if (tcs.entitys[tcs.cField] === 'n') {
      tcs.loadField.class = 'field';
    } else {
      if (tcs.entitys[tcs.cField] === 'm' && tcs.teams[tcs.cField] === 'w') tcs.loadField.className = 'wm';
      if (tcs.entitys[tcs.cField] === 'm' && tcs.teams[this.cField] === 's') tcs.loadField.className = 'bm';
    }
    tcs.cField = tcs.cField + 1;
  },
  nextRound: function() {
    // if (this.teams[0] === this.teams[1] && this.teams[1] === this.teams[2] || this.teams[3] === this.teams[4] && this.teams[4] === this.teams[5] ||
    //   this.teams[6] === this.teams[7] && this.teams[7] === this.teams[8] ||
    //   this.teams[0] === this.teams[3] && this.teams[3] === this.teams[6] ||
    //   this.teams[1] === this.teams[4] && this.teams[4] === this.teams[7] ||
    //   this.teams[2] === this.teams[5] && this.teams[5] === this.teams[8] ||
    //   this.teams[0] === this.teams[4] && this.teams[4] === this.teams[8] ||
    //   this.teams[2] === this.teams[4] && this.teams[4] === this.teams[6] || ) {
    //
    // }

    tcs.fieldRender();
  }
}

var white = {
  points: 0,
  mana: 0
}

var black = {
  points: 0,
  mana: 0
}

var fieldClicks = {
  teamHelper: null,
  a11: function() {
    fieldClicks.setPosition(0);
  },
  a12: function() {
    fieldClicks.setPosition(1);
  },
  a13: function() {
    fieldClicks.setPosition(2);
  },
  a21: function() {
    fieldClicks.setPosition(3);
  },
  a22: function() {
    fieldClicks.setPosition(4);
  },
  a23: function() {
    fieldClicks.setPosition(5);
  },
  a31: function() {
    fieldClicks.setPosition(6);
  },
  a32: function() {
    fieldClicks.setPosition(7);
  },
  a33: function() {
    fieldClicks.setPosition(8);
  },
  setPosition: function(fieldIndex) {
    if (tcs.onTurn === 1) {
      this.teamHelper = 'w';
    } else {
      this.teamHelper = 's';
    }
    if (tcs.entitys[fieldIndex] === 'n') {
      tcs.entitys[fieldIndex] = 'm';
      tcs.teams[fieldIndex] = this.teamHelper;
      tcs.nextRound();
    }
  }
}

function init() {
  document.getElementById('f11').addEventListener('click', fieldClicks.a11, false);
  document.getElementById('f12').addEventListener('click', fieldClicks.a12, false);
  document.getElementById('f13').addEventListener('click', fieldClicks.a13, false);
  document.getElementById('f21').addEventListener('click', fieldClicks.a21, false);
  document.getElementById('f22').addEventListener('click', fieldClicks.a22, false);
  document.getElementById('f23').addEventListener('click', fieldClicks.a23, false);
  document.getElementById('f31').addEventListener('click', fieldClicks.a31, false);
  document.getElementById('f32').addEventListener('click', fieldClicks.a32, false);
  document.getElementById('f33').addEventListener('click', fieldClicks.a33, false);

  oTS.innerHTML = 'Spieler Weiss ist an der Reihe';
}