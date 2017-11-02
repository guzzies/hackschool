function hallo() {
  var name = prompt('Wie heißt du?');
  alert('Cool das du ' + name + ' heißt.');
  var element = document.getElementById('name');
  element.innerHTML = name;
  var yearsold = prompt('Wie alt bist du');
  if (name === 'Joona') {
    element.className = 'wichtiger-name';
  } else {
    element.className = 'name';
  }
  if (yearsold > 13) {
    alert('Willkommen auf meiner Website du ' + yearsold + ' Jahre alter Mensch. (oder anderes Geschöpf)');
  } else {
    alert('Mit ' + yearsold + ' Jahren ist dir der Zugang auf meiner Website verweigert.');
  }
}
