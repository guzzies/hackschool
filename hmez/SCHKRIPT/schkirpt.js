function hallo() {
  var name = prompt('Wie heißt du?');
  if (name == 'Kiara') {
    name = 'Cruara';
  } else if (name == null) {
    name = 'Nameless';
  } else if (name == '') {
    name = 'Nameless';
  } else if (name == 'Blubb') {
    name = 'Tom'
  } else if (name == 'Ruby') {
    name = 'Cruara'
  }
  name = 'Hallo, ' + name;
  var element = document.getElementById('name');
  element.innerHTML = name;
}
