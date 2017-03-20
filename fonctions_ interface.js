<script language="javascript">
var mise=0;
var myArray = [0, 0, 0, 0, 0,];
var mise_totale=500000;
var parties=1;
<<<<<<< HEAD
executeSample();
=======
executeSample(); 
>>>>>>> a80778e68ba72fa7b00a51a9ee9d88b2cc6c0e65

function plus(arg) {
	if (mise_totale>0){
		mise=myArray[arg]+100000;
		myArray[arg] = mise;
		mise_totale=mise_totale-100000;}
	document.getElementById(arg).value=myArray[arg] + " €";
<<<<<<< HEAD
	document.getElementById('ttl').value=mise_totale + " €";
=======
	document.getElementById('ttl').value=mise_totale + " €";   
>>>>>>> a80778e68ba72fa7b00a51a9ee9d88b2cc6c0e65
}

function moins(arg) {
	var value_arg = document.getElementById(arg).value
	if (value_arg != '0 €' ){
		mise=myArray[arg]-100000;
		myArray[arg] = mise;
		mise_totale=mise_totale+100000;}
	document.getElementById(arg).value=myArray[arg] + " €";
<<<<<<< HEAD
	document.getElementById('ttl').value=mise_totale + " €";
=======
	document.getElementById('ttl').value=mise_totale + " €";   
>>>>>>> a80778e68ba72fa7b00a51a9ee9d88b2cc6c0e65
}

function solution() {

	if (mise_totale==0) {
		/*--------*/
<<<<<<< HEAD
		for (var p = 1; p < 5; p++) {
			if (bonne_reponse != p) {
				myArray[p]=0;
				var box = 'box'+p;
				document.getElementById(box).style.background = '#D57272';
			}
			else {
				var box = 'box'+p;
				document.getElementById(box).style.background = '#71C058';
=======
		for (var p = 1; p < 5; p++) { 
			if (bonne_reponse != p) {
				myArray[p]=0;
				var box = 'box'+p;
				document.getElementById(box).style.background = '#D57272'; 
			}
			else {
				var box = 'box'+p;
				document.getElementById(box).style.background = '#71C058'; 
>>>>>>> a80778e68ba72fa7b00a51a9ee9d88b2cc6c0e65
			}

		}
		setTimeout(function() {
<<<<<<< HEAD
			for (var k = 1; k < 5; k++) {
				var box = 'box'+k;
				document.getElementById(box).style.background = '#FFF';
			}},2500);

		mise_totale=myArray[1]+myArray[2]+myArray[3]+myArray[4];
		myArray = [0, 0, 0, 0, 0,];
		for (var i = 1; i < 5; i++) {
			document.getElementById(i).value='0 €';
		}
		document.getElementById('ttl').value=mise_totale +' €';
		/*--------*/
=======
			for (var k = 1; k < 5; k++) { 
				var box = 'box'+k;
				document.getElementById(box).style.background = '#FFF'; 
			}},10000);

		mise_totale=myArray[1]+myArray[2]+myArray[3]+myArray[4];
		myArray = [0, 0, 0, 0, 0,];
		for (var i = 1; i < 5; i++) { 
			document.getElementById(i).value='0 €';
		}
		document.getElementById('ttl').value=mise_totale +' €';
		/*--------*/		
>>>>>>> a80778e68ba72fa7b00a51a9ee9d88b2cc6c0e65
		if (mise_totale==0) {
			setTimeout(function() {
				$(function(){
					setTimeout(function() {Apprise('Vous avez perdu =/');},3000);
					mise_totale=500000;
					parties=1;
					document.getElementById('btn-2partie').value = 'Question N°' + parties;
					document.getElementById('ttl').value=mise_totale +' €';
					setTimeout(function() { executeSample(); },2900);
				});
			},200);
<<<<<<< HEAD

=======
 
>>>>>>> a80778e68ba72fa7b00a51a9ee9d88b2cc6c0e65
		}
		if (mise_totale>0) {
			parties=parties+1;

			if (parties==8) {
				setTimeout(function() {
					$(function(){
						Apprise('Vous avez gagné ' +mise_totale +' € !');
						parties=1;
						document.getElementById('ttl').value=500000 +' €';
						document.getElementById('btn-2partie').value = 'Question N°' + parties;
						document.getElementById('ttl').value= 0  +' €';
						setTimeout(function() { executeSample(); },3000);
					});

<<<<<<< HEAD

=======
                   
>>>>>>> a80778e68ba72fa7b00a51a9ee9d88b2cc6c0e65
				},200);
			}
			else {
				setTimeout(function() { executeSample(); },2900);

			}
		}
	}
	else {
		document.getElementById('ttl').style.color='red';
		document.getElementById('ttl').style.visibility = 'hidden';
		setTimeout(function() {document.getElementById('ttl').style.visibility = 'visible';},200);
        setTimeout(function() {document.getElementById('ttl').style.visibility = 'hidden';},400);
		setTimeout(function() {document.getElementById('ttl').style.visibility = 'visible';},600);
<<<<<<< HEAD
		setTimeout(function() {document.getElementById('ttl').style.visibility = 'hidden';},800);
=======
		setTimeout(function() {document.getElementById('ttl').style.visibility = 'hidden';},800);		
>>>>>>> a80778e68ba72fa7b00a51a9ee9d88b2cc6c0e65
		setTimeout(function() {document.getElementById('ttl').style.visibility = 'visible';},1000);
		setTimeout(function() {document.getElementById('ttl').style.color='Black';},1200);
	}
	document.getElementById('btn-2partie').value = 'Question N°' + parties;
}

</script>
