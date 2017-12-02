var splash = new ldBar(".loading", {
  type: "fill",
  img: "LOGO.svg",
  value: "0"
});

var fill = 0;

var bwt = document.getElementById('bwt')

function tick() {
  splash.set(fill);
  fill = fill + 1;
  if (fill === 100) bwt.style.fontSize = "41px";
  if (fill === 101) bwt.style.fontSize = "41.5px";
  if (fill === 102) bwt.style.fontSize = "42px";
  if (fill === 103) bwt.style.fontSize = "42.5px";
  if (fill === 104) bwt.style.fontSize = "43px";
  if (fill === 105) bwt.style.fontSize = "43.5px";
  if (fill === 106) bwt.style.fontSize = "44px";
  if (fill === 107) bwt.style.fontSize = "44.5px";
  if (fill === 108) bwt.style.fontSize = "45px";
  if (fill === 109) bwt.style.fontSize = "46px";
  if (fill === 110) bwt.style.fontSize = "45px";
  if (fill === 111) bwt.style.fontSize = "44.5px";
  if (fill === 112) bwt.style.fontSize = "44px";
  if (fill === 113) bwt.style.fontSize = "43-5px";
  if (fill === 114) bwt.style.fontSize = "43px";
  if (fill === 115) bwt.style.fontSize = "42.5px";
  if (fill === 116) bwt.style.fontSize = "42px";
  if (fill === 117) bwt.style.fontSize = "41.5px";
  if (fill === 118) bwt.style.fontSize = "41px";

  if (fill > 150) {
    window.location.href = window.location.href + 'main/'
  }
  setTimeout(tick, 50);
}