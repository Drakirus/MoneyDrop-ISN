<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
	<title>Money Drop</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<script src="http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js"></script>


		<!-- Cascading Style Sheets -->
	<link href="style/page.css" rel="stylesheet" type="text/css" />
	<link href="style/component.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="style/apprise-v2.css" type="text/css">

	<script type="text/javascript"></script>

	<!-- jquery -->
	<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="js/apprise-v2.js"></script>

	<!-- Javascript XMLHttpRequest -->
	<?php include "fonctions_afficher_question.js";?>
	<!-- Javascript Interface -->
	<?php include "fonctions_ interface.js";?>


	</head>
<body>
	<div id="bloc_page">
	<header>
		<div id="titre_principal">
			<img src="images/The_Money_Drop.png" alt="Constellation" id="logo" />
			<h1>Projet 2014 ISN</h1>
			<h2>Charles Lucas Pierre</h2>
			<input class="btn-2partie" id="btn-2partie" readonly="readonly" value="Question N°1" >
		</div>

		<quest> <div  class="quest" id="quest"> </div> </quest>

	</header>

	<div id="reponse">
		<div id="box1">
		</div>
		<div id="box2">
		</div>
		<div id="box3">
		</div>
		<div id="box4">
		</div>
	</div>
	<section class="color-2">
		<div id="boxmise">

				<p>
					<button class="btn btn-2m btn-2m"  onClick="moins(1)" >-</button>
					<input class="dispmise" id="1" readonly="readonly" value="0 €">
					<button class="btn btn-2p btn-2p" onClick="plus(1)" >+</button>
				</p>
			</div>
		<div id="boxmise">
			<p>
				<button class="btn btn-2m btn-2m"  onClick="moins(2)" >-</button>
				<input class="dispmise" id="2" readonly="readonly" value="0 €">
				<button class="btn btn-2p btn-2p" onClick="plus(2)" >+</button>
			</p>
		</div>
		<div id="boxmise">
			<p>
				<button class="btn btn-2m btn-2m"  onClick="moins(3)" >-</button>
				<input class="dispmise" id="3" readonly="readonly" value="0 €">
				<button class="btn btn-2p btn-2p" onClick="plus(3)" >+</button>
			</p>
		</div>
		<div id="boxmise">
			<p>
				<button class="btn btn-2m btn-2m"  onClick="moins(4)" >-</button>
				<input class="dispmise" id="4" readonly="readonly" value="0 €">
				<button class="btn btn-2p btn-2p" onClick="plus(4)" >+</button>
			</p>
		</div>
	</section>


	<footer>
			<h2> <input id="ttl" readonly="readonly" value="500000 €">  </h2>
			<p>
				<button id="trappe" class="btnttl" onClick="solution()">Répondre </button>
			</p>

	</footer>

</body>

</html>
