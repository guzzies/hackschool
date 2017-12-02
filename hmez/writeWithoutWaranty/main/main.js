var writewow = {
  textField: document.getElementById('wwwtext'),
  text: '',
  opacity: 1,
  work: null,
  opacityLevel: 25,
  init: function() {
    this.work = bakerJS.get('speed');
    if (this.work != '') {
      this.opacityLevel = this.work;
    } else {
      console.log('[WWOW:] Unable to detect speed-setting. Will work with standard.');
    }
  },
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
  }
}
writewow.tick();