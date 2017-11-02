< !doctype html >
  <
  meta charset = "UTF-8" <
  body >
  <
  span id = "name" > Hier kann dein Name stehen! < /span> <
button onclick = "hallo()" > Klick mich, wenn du dich traust, Mango < /button> <
script type = "text/javascript" >
  function hallo() {
    var name = prompt('Wie heiﬂt du?');
    var element = document.getElementById('name')
    element.innerHTML = name;
  } <
  /script> <
body >
