<?php

/* ####################################################################################
Ein einfacher Audio-Player auf HTML5 Basis.
Browser: IE 9+, Chrome (auch iOS), Safari (auch iOS), Firefox ab V. 21, neue Opera
http://webdesign.weisshart.de 2014
Lizenz: CC BY-NC-SA 3.0 DE
##################################################################################### */

/* ################### hier die .mp3 Dateien (Streams gehen als https nicht) ######## */


	$url = array (
		"Ausnahmetalent.mp3",
		"//webdesign.weisshart.de/audios/the_magics_tuff.mp3",
		"http://br-mp3-bayern1obb-m.akacast.akamaistream.net/7/273/142690/v1/gnl.akacast.akamaistream.net/br_mp3_bayern1obb_m",
		"http://ndr-ndr2-nds-mp3.akacast.akamaistream.net/7/400/252763/v1/gnl.akacast.akamaistream.net/ndr_ndr2_nds_mp3"
	);

	/* ################### und hier die angezeigten Titel  ######################### */
	$name = array (
		"Diese Musik ist gemafrei",
		"Tuff - The Magics unplugged",
		"Bayern 1 [Stream]",
		"NDR 2 [Stream]"
	);



/* ##################### ab hier nicht mehr editieren ########################## */

$aufruf ="";
$direktLink ="";


function isIOS($user_agent=NULL) {
    if(!isset($user_agent)) {
        $user_agent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
    }
    return (strpos($user_agent, 'iPhone') !== FALSE || strpos($user_agent, 'iPad') !== FALSE || strpos($user_agent, 'iPod') !== FALSE );
}


/* den uebergebenen Titel abfragen */
if (isset($_REQUEST['titel']))  {
	$autoplay="autoplay"; /* kein Autoplay in iOS */
	$neuer_titel=true;
	for ($i = 1; $i <= count($url); $i++) {
		if ($_REQUEST["titel"] == $i) {$titel = $url[$i-1];}
	}
} else {
$titel = $url[0];
$autoplay = "";
}

/* die Linkliste generieren */
for ($i = 1; $i <= count($url); $i++) {
	$aufruf .= '<li><a href="?titel='.$i.'"> '.$name[$i-1];
	if ($titel == $url[$i-1]) {
		$aufruf .= "<span class='star'> ✔︎</span>";
	}
	$aufruf .= "</a></li>\n";

	$direktlink .= '<li><a style="color:#000" href="'.$url[$i-1].'"> '.$name[$i-1].'</a></li>';
}

?>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />

<link rel="stylesheet" type="text/css" media="screen" href="audiotest.css" />
<title>HTML5 Audio und Radio Player</title>
<!-- <script src="modernizr.custom.29132.js"></script> -->

<?php
if(isIOS()) {
echo '
<style>
	#player {background: #e1e1e1;border: 2px solid #aaa;}
	li a {color:#000 !important;}
	li {border-top: 1px solid #aaa}
	audio {margin: 10px 0 5px 0}
</style>
';
}
?>

</head>
<body  onload="Lautstaerke()">

<!-- <h2>HTML5 Audio- und Radio-Player</h2> -->

<div id="h2"></div>
<script>
if (top.location == self.location) {
    // Seite in einem Frame geladen
	document.getElementById('h2').innerHTML='<h1>HTML5 Audio- und Radio-Player</h1>';
}
</script>





<div id="ie_fallback"></div>
<div id="player">

<!-- erstaunlich: ohne <source> tag gehts auch mit VO auf iOS -->
<audio id="innerplayer" src="<?php echo $titel; ?>"  controls <?php echo $autoplay; ?> ></audio>

<ul>
<?php echo $aufruf; ?>
</ul>
</div>

<div id="down_hinweis"></div>


<!-- <p id="gemafrei" class="bem">Gemafreie Demo-mp3: <a href="http://www.MP3-GEMA-frei.de">MP3-GEMA-frei.de</a></p> -->

<?php
$neuer_titel = 0;
if (isset($_REQUEST['titel']))  {$neuer_titel=1;}
?>

<script>
// if (!Modernizr.audio.mp3) {
// 	document.getElementById('player').style.display = 'none';
// 	document.getElementById('ie_fallback').innerHTML='<p>Ihr Browser kann leider keine Audios im MP3-Format abspielen. Das tut uns leid. <br />Ersatzweise hier die Links zum Abspielen in einem installierten Player oder zum Download (rechte Maustaste).</p> <ul><?php echo $direktlink; ?></ul>';
// }


/* Damit Screen Reader Ausgaben nicht uebertoent werden: */
function Lautstaerke() {
	document.getElementById("innerplayer").volume=0.7;
	/* Fokus auf Player setzen nach Anwahl */
		var neu = <?php echo $neuer_titel; ?>;
	if ( neu === 1 ) {
		document.getElementById('innerplayer').focus();
	}
}
</script>



</body>
</html>
