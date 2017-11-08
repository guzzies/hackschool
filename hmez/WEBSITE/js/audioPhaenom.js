//welcome to audioPhaenom.
//this is a javaScript by Dominik Mezler (@bluewingtitan/HMeZ)
//feel free to modify and use the script for your own purposes,
//for more infos, look up for the licence4audioPhaenom.md file, that you should find in the same folder as this file.
//the license is only suitable for audioPhaenom, not for the tracks, you can play with audioPhaenom on my website.
//This Version of audioPhaenom contains some code, wich is using Mousetrap! I can't provide any licence for Mousetrap, search up for it and include it in your Project externaly,
//if you want to use audioPhaenom with the additional Mousetrap-functionality.

//At first, lets set up the error-messeages:
var err_noSong =`[audioPhaenom:] No songs are defined.`;
var err_songUndefined = `[audioPhaenom:] No song found under " ${err_path} " !`

var err_path = 'undefined'; //this var will be used in a future update, to specify the error-messeage from audioPhaenom with the id err_songUndefined.

//now setup your playlist.
var songs = ['./tracks/1.mp3', './tracks/2.mp3', './tracks/3.mp3', './tracks/4.mp3']; //the source-array.
var names = ['Ausnahmetalent', 'pulse.', 'Reflect', 'Weiße Augen III']; //the songtitle-array
var artists = ['HMeZ', 'HMeZ', 'HMeZ', 'HMeZ']; //the artists-array
var albums = ['pulse.', 'pulse.', 'pulse.', 'pulse.']; //the albumName-array
var maxIndex = 3; //the number of songs, you've definded minus one.

//objects and eventlisteners
var player = document.getElementById('player'); //switch 'player' with the id of your <audio> tag
var scroller = document.getElementById('trackLaenge'); //switch 'trackLaenge' with the id of your <input type="range">
scroller.addEventListener('input', scrolled, false); //don't change anything here
document.getElementById('c_play').addEventListener('click', play, false); //change 'c_play' with the id of your play button.
document.getElementById('c_back').addEventListener('click', jumpBack, false); //change 'c_back' with the id of your back button.
document.getElementById('c_f').addEventListener('click', jumpForward, false); //change 'c_f' with the id of your forward button.
player.addEventListener('ended', jumpForward, false); //change nothing here

//don't change this vars.
var playerSet = false; //if the player isn't setted up, there will be an error-alert. This var will change, when the player will setup itself.
var index = 0; //set the index to 0, it will begin with the 1st song in the array.
var timeKeeper = 0; //this var will keep the current play time
var playing = false;

//Lets start with some keybindings. I've used mousetrap for that, a little simple library to bind and unbind keyboard-keys with functions.
Mousetrap.bind('left', jumpBack);
Mousetrap.bind('right', jumpForward);
Mousetrap.bind('space', play);
Mousetrap.bind('a', scrollBackwards);
Mousetrap.bind('d', scrollForwards);

function play() { //when play button pressed
  if (playerSet === false) { //if no song is setted up
    initPlayer(true);
  } else { //IF THE PLAYER IS SETTED UP
    document.getElementById('c_play').src = './imgs/pause.svg'; //Virtualize, that there is now the option, to pause the playing
    player.src = songs[index]; //set the new source from the array
    player.currentTime = timeKeeper; //restart the track from the old time, if the track only was paused
    player.play(); //start the playing-process
    document.getElementById('c_play').removeEventListener('click', play, false); //change the eventlisteners, because the play button now should pause the track on click
    document.getElementById('c_play').addEventListener('click', pause, false); //change the eventlisteners, because the play button now should pause the track on click
    Mousetrap.bind('space', pause);
    playing = true;
    actualize(false);
  }
}

function initPlayer(startPlay) {
  if (maxIndex > 0) { //if there are songs in the playlist
    index = 0; //set index to 1, but its actually 0, beceause arrays are 0-indicized
    playerSet = true; //setup, that the player is setted up
  } else {
    console.log(err_noSong) //THERE IS NO SONG IN THE PLAYLIST TO PLAY!
  }
  actualize(false);
  if (startPlay === true) {
    play();
  }
}
function actualize(newSong) {
  document.getElementById('songtitle').innerHTML = names[index]; //Change the songdescription
  document.getElementById('album').innerHTML = albums[index]; //Change the songdescription
  document.getElementById('artist').innerHTML = artists[index]; //Change the songdescription
  if (playing === true && newSong === true) {
    play();
  } else if (newSong === true) {
    scroller.value = 0;
    player.currentTime = 0;
  }
}

function jumpBack() { //junp to the last song
  if (playerSet === false) { //if no song is setted up
    initPlayer(false); //the song-setup is defined in play(), so it will route to play()
  } else { //if a track is definded
    if (index === 0) { //if the track is the first in the playlist-array, so you can't jump backwards to another track
      index = maxIndex; //set the Index to the LAST song of the playlist.
      timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
      actualize(true); //start playing track
    } else { //if there is a track before this track in the trackarrays
      timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
      index = index - 1; //setup the index to the song, before the selected song
      actualize(true); //actualize track infos
    }
  }
}

function jumpForward() { //jump to the next song
  if (playerSet === false) { //if no song is setted up
    initPlayer(false); //song setup is in play(), so it will route to play()
  } else { //if there are defined tracks
    if (index === maxIndex) { //if the end of the playlist is reached
      index = 0; //set index back to the beginning
      timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
      actualize(true); //start playing
    } else { //if there is a 'next' song
      timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
      index = index + 1; //set the new index
      actualize(true); //actualize track infos
    }
  }
}

function pause() { //pause playing
  player.pause(); //pause the actual player (<audio>)
  timeKeeper = player.currentTime; //keep the tracktime in mind!
  document.getElementById('c_play').src = './imgs/play.svg'; //show, that now, there is the option to continue playing
  document.getElementById('c_play').removeEventListener('click', pause, false); //change eventlisteners
  document.getElementById('c_play').addEventListener('click', play, false); //chane eventlisteners
  Mousetrap.bind('space', play);
  playing = false;
}

function scrollForwards() {
  player.currentTime = player.currentTime + 5;
  Mousetrap.bind('d', dummy);
}

function scrollBackwards() {
  player.currentTime = player.currentTime - 5;
  Mousetrap.bind('a', dummy);
}

function scrolled() { //if the scroller was changed
  player.currentTime = scroller.value; //set the playertime to the scroller value
}

function reloadscroller() { //this is a function, to reload the scroller, 2 times a second. change time, if you want to.
  scroller.max = player.duration; //setup max-value (to avoid, that the scroller won't move)
  scroller.value = player.currentTime; //set the scrollers new position
  Mousetrap.bind('a', scrollBackwards);
  Mousetrap.bind('d', scrollForwards);
  setTimeout(reloadscroller, 500); //set the cooldown in milliseconds
}

reloadscroller(); //the first function call of reloadscroller() to start the loop.
