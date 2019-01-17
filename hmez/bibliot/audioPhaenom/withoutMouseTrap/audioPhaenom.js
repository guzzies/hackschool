//welcome to audioPhaenom.
//this is a javaScript by Dominik Mezler (@bluewingtitan/HMeZ)
//feel free to modify and use the script for your own purposes,
//for more infos, look up for the licence4audioPhaenom.md file, that you should find in the same folder as this file.
//the license is only suitable for audioPhaenom, not for the tracks, you can play with audioPhaenom on my website.
//This script is ment for useage without mousetrap, if you want to be able to use it with key-bindings, you may use
//the version compatible with mousetrap and mousetrapJS itself :D


//At first, lets set up the error-messeages:
var errorNotes = {
  err_noSong: '[audioPhaenom:] No songs are defined.',
  err_songUndefined: '[audioPhaenom:] No song found under !',
  errNoSong: function(alertError) {
    console.error(err_noSong);
    if (alertError === true) {
      alert(err_noSong);
    }
  },
  undefined: function(path, alertError) {
    console.error(err_songUndefined + path + " !");
    if (alertError === true) {
      alert(err_songUndefined + path + " !");
    }
  }
}

//now setup your playlist.
var playlist = {
  songs: ['./tracks/1.mp3', './tracks/2.mp3', './tracks/3.mp3', './tracks/4.mp3'], //the source-array.
  names: ['Ausnahmetalent', 'pulse.', 'Reflect', 'Weiße Augen III'], //the songtitle-array
  artists: ['HMeZ', 'HMeZ', 'HMeZ', 'HMeZ'], //the artists-array
  albums: ['pulse.', 'pulse.', 'pulse.', 'pulse.'], //the albumName-array
  maxIndex: 3 //the number of songs, you've definded minus one.
};


//objects and eventlisteners
var player = document.getElementById('player'); //switch 'player' with the id of your <audio> tag
var scroller = document.getElementById('trackLaenge'); //switch 'trackLaenge' with the id of your <input type="range">

//don't change this vars!
var playerSet = false; //if the player isn't setted up, there will be an error-alert. This var will change, when the player will setup itself.
var index = 0; //set the index to 0, it will begin with the 1st song in the array.
var timeKeeper = 0; //this var will keep the current play time
var playing = false;


function initializePhaenom() {
  scroller.addEventListener('input', audioPhaenom.scrolled, false); //don't change anything here
  document.getElementById('c_play').addEventListener('click', audioPhaenom.play, false); //change 'c_play' with the id of your play button.
  document.getElementById('c_back').addEventListener('click', audioPhaenom.jumpBack, false); //change 'c_back' with the id of your back button.
  document.getElementById('c_f').addEventListener('click', audioPhaenom.jumpForward, false); //change 'c_f' with the id of your forward button.
  player.addEventListener('ended', audioPhaenom.jumpForward, false); //change nothing here


  reloadscroller(); //the first function call of reloadscroller() to start the loop.
}


var audioPhaenom = { //this var contains the core of audioPhaenom.
  play: function() { //when play button pressed
    if (playerSet === false) { //if no song is setted up
      audioPhaenom.initPlayer(true); //initialize player and start playing after that
    } else { //IF THE PLAYER IS SETTED UP
      document.getElementById('cplayer').src = './imgs/pause.png'; //Virtualize, that there is now the option, to pause the playing
      player.src = playlist.songs[index]; //set the new source from the array
      player.currentTime = timeKeeper; //restart the track from the old time, if the track only was paused
      player.play(); //start the playing-process
      document.getElementById('c_play').removeEventListener('click', audioPhaenom.play, false); //change the eventlisteners, because the play button now should pause the track on click
      document.getElementById('c_play').addEventListener('click', audioPhaenom.pause, false); //change the eventlisteners, because the play button now should pause the track on click
      playing = true; //set the playing-status to true
      audioPhaenom.actualize(false); //actualize songinfo, but don't start new song, beceause this will cause a loop
    }
  },
  initPlayer: function(startPlay) { //on first play/skip-event
    if (playlist.maxIndex > 0) { //if there are songs in the playlist
      index = 0; //set index to 1, but its actually 0, beceause arrays are 0-indicized
      playerSet = true; //setup, that the player is setted up
    } else { //if there are no songs defined
      errorNotes.errNoSong(true);
    }
    audioPhaenom.actualize(false); //actualize the playerinfo
    if (startPlay === true) { //if it should start a new song
      audioPhaenom.play(); //call the player
    }
  },
  actualize: function(newSong) {
    document.getElementById('songtitle').innerHTML = playlist.names[index]; //Change the songdescription
    document.getElementById('album').innerHTML = playlist.albums[index]; //Change the songdescription
    document.getElementById('artist').innerHTML = playlist.artists[index]; //Change the songdescription
    document.title = playlist.artists[index] + '-' + playlist.names[index];
    if (playing === true && newSong === true) { //if the actualizer schould start a new song AND the player is playing
      audioPhaenom.play();
    } else if (newSong === true) { //if the actualizer should start a new song
      scroller.value = 0; //set scrollervalue to 0
      player.currentTime = 0; //set songposition to 0
    }
  },
  jumpBack: function() { //junp to the last song
    if (playerSet === false) { //if no song is setted up
      audioPhaenom.initPlayer(false); //the song-setup is defined in play(), so it will route to play()
    } else { //if a track is definded
      if (index === 0) { //if the track is the first in the playlist-array, so you can't jump backwards to another track
        index = playlist.maxIndex; //set the Index to the LAST song of the playlist.
        timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
        audioPhaenom.actualize(true); //start playing track
      } else { //if there is a track before this track in the trackarrays
        timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
        index = index - 1; //setup the index to the song, before the selected song
        audioPhaenom.actualize(true); //actualize track info
      }
    }
  },
  jumpForward: function() { //jump to the next song
    if (playerSet === false) { //if no song is setted up
      audioPhaenom.initPlayer(false); //song setup is in play(), so it will route to play()
    } else { //if there are defined tracks
      if (index === playlist.maxIndex) { //if the end of the playlist is reached
        index = 0; //set index back to the beginning
        timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
        audioPhaenom.actualize(true); //start playing
      } else { //if there is a 'next' song
        timeKeeper = 0; //set timeKeeper to 0, so it will start the track from the start, not in the middle (or end!)
        index = index + 1; //set the new index
        audioPhaenom.actualize(true); //actualize track infos
      }
    }
  },
  pause: function() { //pause playing
    player.pause(); //pause the actual player (<audio>)
    timeKeeper = player.currentTime; //keep the tracktime in mind!
    document.getElementById('cplayer').src = './imgs/play.png'; //show, that now, there is the option to continue playing
    document.getElementById('c_play').removeEventListener('click', audioPhaenom.pause, false); //change eventlisteners
    document.getElementById('c_play').addEventListener('click', audioPhaenom.play, false); //chane eventlisteners
    playing = false; //set new state of playing
  },
  scrollForwards: function() { //if scroll-button was pressed
    player.currentTime = player.currentTime + 5; //set new time
    Mousetrap.bind('d', dummy); //Set the binding to dummy. --> Ignore Button-downs until the next Update of the scroller
  },
  scrollBackwards: function() { //if scroll-button was pressed
    player.currentTime = player.currentTime - 5; //set new time
  },
  scrolled: function() { //if the scroller was changed
    player.currentTime = scroller.value; //set the playertime to the scroller value
  },
}

function reloadscroller() { //this is a function, to reload the scroller, 2 times a second. change time, if you want to.
  var scroller = document.getElementById('trackLaenge');
  scroller.max = player.duration; //setup max-value (to avoid, that the scroller won't move)
  scroller.value = player.currentTime; //set the scrollers new position
  setTimeout(reloadscroller, 100); //set the cooldown in milliseconds
}
initializePhaenom(); //start the initialization