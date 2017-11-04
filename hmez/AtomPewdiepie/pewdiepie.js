function hallo(name) {
  console.log(name);
}
hallo('Blubb')

function nameVerwerten() {
  var element = document.getElementById('namer').value;
  hallo(element);
}

function wurzelZiehen(zahl) {
  return Math.sqrt(zahl);
}

for (var c = 0; c < 50; c++) {
  var wurzel = wurzelZiehen(c);
  console.log(`Wurzel von ${c}: ${wurzel}!`);
}
