function hallo() {
  var name = prompt('Wie heißt du?');
  var element = document.getElementById('name');
  element.className = 'name';
  if (name == 'Kiara') {
    name = 'Cruara';
    element.className = 'name2';
  } else if (name === null) {
    name = 'Nameless';
  } else if (name === '') {
    name = 'Nameless';
    element.className = 'name3';
  } else if (name === 'Blubb') {
    name = 'Tom';
    element.className = 'name3';
  } else if (name === 'Ruby') {
    name = 'Cruara';
    element.className = 'name2';
  }
  name = 'Hallo, ' + name;
  element.innerHTML = name;

}
