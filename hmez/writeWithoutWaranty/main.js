var writewow = {
  textField: document.getElementById('wwwtext'),
  text: '',
  opacity: 1,
  opacityLevel: 25,
  tick: function() {
    if (writewow.textField.value === '') {
      writewow.textField.style.opacity = 1;
      writewow.opacity = 1;
    } else {
      if (writewow.textField.value === writewow.text) {
        writewow.opacity = writewow.opacity - writewow.opacityLevel * 0.001;
        writewow.textField.style.opacity = writewow.opacity;
        if (writewow.textField.style.opacity < -0.02 * writewow.opacityLevel) {
          writewow.textField.value = '';
        }
      } else {
        writewow.text = writewow.textField.value;
        writewow.opacity = 1;
      }
    }
    setTimeout(writewow.tick, 100);
  },
  redefine: function() {
    var input = prompt('Lege eine neue Verschwinde-schnelligkeit fest (Standart: 25).');
    if (isNaN(input) != true && input != null) {
      writewow.opacityLevel = input;
      if (input < 10) {
        document.getElementById('title').innerHTML = 'Notepad+++';
        document.getElementById('credits3').innerHTML = 'Du wolltest es ja nicht anders... Hier hast du es :P';
        if (input < 0) {
          alert('Ich hoffe, du bist dir Bewusst, dass du gerade das Konzept von dem allen hier komplett zerstört hast?!?')
          document.getElementById('title').innerHTML = 'Broken Waranty';
          document.getElementById('credits3').innerHTML = 'Na toll! Jetzt hast du die Garantie geschrottet.';
        }
        alert(input + ' ?!? Ich sage ja jetzt nicht, dass du das nicht darfst, aber dann kannst du auch gleich einen normalen Editor verwenden... (O_o) ')
      } else {
        document.getElementById('title').innerHTML = 'Write without Waranty';
      }
    } else {
      input = prompt('Bitte gebe eine ZAHL ein!');
    }
  }
}
Mousetrap.bind('up', writewow.redefine);
writewow.tick();