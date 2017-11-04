function hallo() {
  var yearsold = prompt('Wie alt bist du');
  if (yearsold >= 42) {
    document.location.href = 'horror.html';
    alert('Willkommen auf meiner Website du ' + yearsold + ' Jahre alter Mensch. (oder anderes Geschöpf)');
  } else {
    document.location.href = 'joona.html';
    alert('Mit ' + yearsold + ' Jahren ist dir der Zugang auf meiner Website verweigert.');
  }
}
