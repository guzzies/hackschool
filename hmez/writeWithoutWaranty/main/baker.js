//simple small thing, written by bluewingtitan.
//used to work with cookies.
//beceause cookies are very tasty!

var bakerJS = {
  set: function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ";" + expires + ';path=/';
    console.log('[bakerJS:]safed cookie');
  },
  get: function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log('[bakerJS:]got cookie');
        return c.substring(name.length, c.length);
      }
    }
    console.log('[bakerJS:]uneable to get cookie');
    return "";
  },
}