// This is a JavaScript by Dominik Mezler, to control HTML-Audio-Tags.
// It will be used to create a playlist and to play different songs. There will be an option, to toggle the different Songs from the html via eventlisteners.

//At first, lets set up the error-messeages:

var err_noSong = 'Es ist kein Song zum Abspielen ausgewählt.';
var err_endOfList = 'Nach diesem Song gibt es keinen anderen mehr.';
var err_startOfList = 'Vor diesem Song gibt es keinen anderen Song.';

var playerSet = false; //if the player isn't setted up, there will be an error-alert.
var index = 0;
var songs = ['./tracks/1.mp3', './tracks/2.mp3', './tracks/3.mp3', './tracks/4.mp3'];
var names = ['Ausnahmetalent', 'pulse.', 'Reflect', 'Weiße Augen III'];
var artists = ['HMeZ', 'HMeZ', 'HMeZ', 'HMeZ'];
var albums = ['pulse.', 'pulse.', 'pulse.', 'pulse.'];
var maxIndex = 3;

var timeKeeper = 0;

var player = document.getElementById('player');

document.getElementById('c_play').addEventListener('click', play, false);
document.getElementById('c_back').addEventListener('click', jumpBack, false);
document.getElementById('c_f').addEventListener('click', jumpForward, false);

function play() { //when play button pressed

  if (playerSet === false) { //if no song is setted up
    if (maxIndex > 0) { //if there are songs in the playlist
      index = 0; //set index to 1, but its actually 0, beceause arrays are 0-indicized
      playerSet = true; //setup, that the player is setted up
      play() //restart the play function to get the else to work.
    } else {
      alert(err_noSong) //THERE IS NO SONG IN THE PLAYLIST TO PLAY!
    }
  } else { //IF THE PLAYER IS SETTED UP

    document.getElementById('songtitle').innerHTML = names[index]; //Change the songdescription
    document.getElementById('album').innerHTML = albums[index]; //Change the songdescription
    document.getElementById('artist').innerHTML = artists[index]; //Change the songdescription
    document.getElementById('c_play').src = './imgs/pause.png';
    player.src = songs[index];
    player.currentTime = timeKeeper;
    player.play();
    document.getElementById('c_play').removeEventListener('click', play, false);
    document.getElementById('c_play').addEventListener('click', pause, false);

  }
}

function jumpBack() {
  if (playerSet === false) {
    alert(err_noSong);
  } else {
    if (index === 0) {
      alert(err_startOfList);
    } else {
      index = index - 1;
      play();
    }
  }
}

function jumpForward() {
  if (playerSet === false) {
    alert(err_noSong);
  } else {
    if (index === maxIndex) {
      index = 0;
      play();
    } else {
      index = index + 1;
      play();
    }
  }
}

function pause() {
  player.pause();
  timeKeeper = player.currentTime;
  document.getElementById('c_play').src = './imgs/play.png';
  document.getElementById('c_play').removeEventListener('click', pause, false);
  document.getElementById('c_play').addEventListener('click', play, false);
}
