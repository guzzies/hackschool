function hallo() {
  var name = prompt('Wie hei�t du?');
  var element = document.getElementById('name')
  element.innerHTML = name;
  if (name === 'Ruby') {
    element.className = 'wichtiger-name'
  }
}
