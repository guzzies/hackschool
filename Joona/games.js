function hallo() {
  var yearsold = prompt('Wie alt bist du');
  if (yearsold >= 16) {
    document.location.href = 'joona2.html';
    alert('Willkommen auf meiner Website du ' + yearsold + ' Jahre alter Mensch. (oder anderes Geschöpf)');
  } else {
    document.location.href = 'games.html';
    alert('Mit ' + yearsold + ' Jahren ist dir der Zugang auf meiner Website verweigert.');
  }
}
