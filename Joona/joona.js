function hallo() {
  console.log(Ducument);
  var yearsold = prompt('Wie alt bist du');
  if (yearsold >= 16) {
    document.location.href = 'joona2.html';
    alert('Willkommen auf meiner Website du ' + yearsold + ' Jahre alter Mensch. (oder anderes Geschöpf)');
  } else {
    document.location.href = 'joona.html';
    alert('Mit ' + yearsold + ' Jahren ist dir der Zugang auf meiner Website verweigert.');
  }
}
var opacity = 1;
function vanish() {
  var katze = document.getElementById('katze');
  // katze.className = "hidden";
    opacity = opacity - 0.1;
    katze.style = "opacity: " + opacity;
}
