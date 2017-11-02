function hallo() {
  var name = prompt('Wie heißt du?');
  var element = document.getElementById('name');
  element.innerHTML = name;
  if (name === 'Tom') {
    element.className = 'wichtiger-name';
  }
}