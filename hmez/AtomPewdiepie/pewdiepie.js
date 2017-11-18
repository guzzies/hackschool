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


var meinObjekt = {
  name: 'HMeZ',
  alter: 16,
  schuhgroesse: 44
};
console.log(`${meinObjekt.name} ist der Name des Künstlers. Er ist ${meinObjekt.alter} Jahre alt und hat die Schuhgöße ${meinObjekt.schuhgroesse}`);
meinObjekt.schuhgroesse = 100;
meinObjekt.alter = 16349;
meinObjekt.name = 'Godzilla';
console.log(`${meinObjekt.name} ist der Name des Künstlers. Er ist ${meinObjekt.alter} Jahre alt und hat die Schuhgöße ${meinObjekt.schuhgroesse}`);
