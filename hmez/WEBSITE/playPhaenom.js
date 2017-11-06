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

var player = document.getElementById('player');

document.getElementById('c_play').addEventListener('click', play, false);
document.getElementById('c_back').addEventListener('click', jumpBack, false);
document.getElementById('c_f').addEventListener('click', jumpForward, false);

function play(){ //when play button pressed

  if (playerSet === false){ //if no song is setted up
    if (maxIndex > 0){ //if there are songs in the playlist
      index = 0; //set index to 1, but its actually 0, beceause arrays are 0-indicized
      playerSet = true; //setup, that the player is setted up
      play() //restart the play function to get the else to work.
    }else{
    alert(err_noSong) //THERE IS NO SONG IN THE PLAYLIST TO PLAY!
  }else{ //IF THE PLAYER IS SETTED UP
    document.getElementById('songtitle').innerHTML = names[index];
    document.getElementById('albums').innerHTML = album[index];
    document.getElementById('artists').innerHTML = names[index];
    player.src = songs[index];
    player.play();
    document.getElementById('c_play')
  }
}

function jumpBack(){
  if (playerSet === false){
    alert(err_noSong)
  }else{
  }
}

function jumpForward(){
  if (playerSet === false){
    alert(err_noSong)
  }else{
  }
}
