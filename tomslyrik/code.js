function zahlEingeben() {
  var zahl = prompt();
  var meineWurzel = wurzelZiehen(zahl);
  console.log(meineWurzel);
}

function wurzelZiehen(zahl) {
  var wurzel = Math.sqrt(zahl);
  return wurzel;
}

for (var i = 0; i < 500; i++) {
  var wurzel = wurzelZiehen(i);
  console.log(`Wurzel von ${i}: ${wurzel}`);
}