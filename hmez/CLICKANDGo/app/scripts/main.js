function browse() {
  var input = document.getElementById('userInput');
  var player = document.getElementById('videoPlayer');
  var inputted = input.value;
  input.value = '';
  if (inputted === 'Monkton') { //Password for wildflower
    document.getElementById('download').click();
    console.log('Setted');
  }
}