function hallo() {
  var name = prompt('Wie heißt du?');
  var element = document.getElementById('name');
  element.innerHTML = name;
  if (name === 'Tom') {
    element.classList.add('wichtig');
  } else {
    element.classList.remove('wichtig');
  }
}