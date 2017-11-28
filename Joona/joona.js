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
function vanish() {
  var katze = document.getElementById('katze');
  if (katze.classList.contains("hidden")) {
    katze.classList.remove("hidden");
    katze.classList.add("show");
  } else {
    katze.classList.remove("show");
    katze.classList.add("hidden");
  }
}
