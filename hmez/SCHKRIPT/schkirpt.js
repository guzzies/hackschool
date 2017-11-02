function hallo() {
  var name = prompt('Wie heißt du?');
  var element = document.getElementsById('name')
  if (name == 'Kiara') {
    name = 'Cruara';
    element.className = 'name2';
  } else if (name === null) {
    name = 'Nameless';
  } else if (name === '') {
    name = 'Nameless';
  } else if (name === 'Blubb') {
    name = 'Tom'
  } else if (name === 'Ruby') {
    name = 'Cruara'
  }
  name = 'Hallo, ' + name;
  element.innerHTML = name;
}
