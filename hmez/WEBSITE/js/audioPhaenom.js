//welcome to audioPhaenom.
//this is a javaScript by Dominik Mezler (@bluewingtitan/HMeZ)
//feel free to modify and use the script for your own purposes,
//for more infos, look up for the licence4audioPhaenom.md file, that you should find in the same folder as this file.
//the license is only suitable for audioPhaenom, not for the tracks, you can play with audioPhaenom on my website.

//At first, lets set up the error-messeages:

var err_noSong = 'Es ist kein Song zum Abspielen ausgewählt.';
var err_endOfList = 'Nach diesem Song gibt es keinen anderen mehr.';
var err_startOfList = 'Vor diesem Song gibt es keinen anderen Song.';
//now setup your playlist.
var songs = ['./tracks/1.mp3', './tracks/2.mp3', './tracks/3.mp3', './tracks/4.mp3']; //the source-array.
var names = ['Ausnahmetalent', 'pulse.', 'Reflect', 'Weiße Augen III']; //the songtitle-array
var artists = ['HMeZ', 'HMeZ', 'HMeZ', 'HMeZ']; //the artists-array
var albums = ['pulse.', 'pulse.', 'pulse.', 'pulse.']; //the albumName-array
var maxIndex = 3; //the number of songs, you've definded minus one.

//don't change this vars.
var playerSet = false; //if the player isn't setted up, there will be an error-alert. This var will change, when the player will setup itself.
var index = 0; //set the index to 0, it will begin with the 1st song in the array.

var timeKeeper = 0;

var player = document.getElementById('player'); //switch 'player' with the id of your <audio> tag
var scroller = document.getElementById('trackLaenge'); //switch 'trackLaenge' with the id of your <input type="range">
scroller.addEventListener('input', scrolled, false); //don't change anything here
document.getElementById('c_play').addEventListener('click', play, false); //change 'c_play' with the id of your play button.
document.getElementById('c_back').addEventListener('click', jumpBack, false); //change 'c_back' with the id of your back button.
document.getElementById('c_f').addEventListener('click', jumpForward, false); //change 'c_f' with the id of your forward button.
player.addEventListener('ended', jumpForward, false); //change nothing here

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
    document.getElementById('c_play').src = './imgs/pause.png'; //Virtualize, that there is now the option, to pause the playing
    player.src = songs[index]; //set the new source from the array
    player.currentTime = timeKeeper; //restart the track from the old time, if the track only was paused
    player.play(); //start the playing-process
    document.getElementById('c_play').removeEventListener('click', play, false); //change the eventlisteners, because the play button now should pause the track on click
    document.getElementById('c_play').addEventListener('click', pause, false); //change the eventlisteners, because the play button now should pause the track on click

  }
}

function jumpBack() { //junp to the last song
  if (playerSet === false) { //if no song is setted up
    play(); //the song-setup is defined in play(), so it will route to play()
  } else { //if a track is definded
    if (index === 0) { //if the track is the first in the playlist-array, so you can't jump backwards to another track
      index = maxIndex; //set the Index to the LAST song of the playlist.
      timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
      play(); //start playing track
    } else { //if there is a track before this track in the trackarrays
      timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
      index = index - 1; //setup the index to the song, before the selected song
      play(); //start playing track
    }
  }
}

function jumpForward() { //jump to the next song
  if (playerSet === false) { //if no song is setted up
    play(); //song setup is in play(), so it will route to play()
  } else { //if there are defined tracks
    if (index === maxIndex) { //if the end of the playlist is reached
      index = 0; //set index back to the beginning
      timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
      play(); //start playing
    } else { //if there is a 'next' song
      timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
      index = index + 1; //set the new index
      play(); //start playing
    }
  }
}

function pause() { //pause playing
  player.pause(); //pause the actual player (<audio>)
  timeKeeper = player.currentTime; //keep the tracktime in mind!
  document.getElementById('c_play').src = './imgs/play.png'; //show, that now, there is the option to continue playing
  document.getElementById('c_play').removeEventListener('click', pause, false); //change eventlisteners
  document.getElementById('c_play').addEventListener('click', play, false); //chane eventlisteners
}

function scrolled() { //if the scroller was changed
  scroller.max = player.duration; //setup max-value (to avoid an error)
  player.currentTime = scroller.value; //set the playertime to the scroller value
}

function reloadscroller() { //this is a function, to reload the scroller, 2 times a second. change time, if you want to.
  scroller.max = player.duration; //setup max-value (to avoid, that the scroller won't move)
  scroller.value = player.currentTime; //set the scrollers new position
  setTimeout(reloadscroller, 500); //set the cooldown in milliseconds
}

reloadscroller(); //the first function call of reloadscroller() to start the loop.