<script language = "javascript" >

function callScript(scriptName, args) {

    var xhr_object = null;

    // ### Construction de l’objet XMLHttpRequest selon le type de navigateur
    // Cas des navigateurs de type Netscape (Firefore, Conqueror, etc.)
    if (window.XMLHttpRequest)
        xhr_object = new XMLHttpRequest();
    // Cas du navigateur Internet Explorer
    else if (window.ActiveXObject)
        xhr_object = new ActiveXObject("Microsoft.XMLHTTP");
    // Cas des navigateurs ne comprenant pas cette technologie (anciens navigateurs)
    else {
        // XMLHttpRequest non supporté par le navigateur 
        alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");
        return;
    }

    xhr_object.open("POST", scriptName, true);

    //  Définition du comportement à adopter sur le changement d’état de l’objet 
    // XMLHttpRequest
    xhr_object.onreadystatechange = function() {
        // Etat : requête terminée, réponse récupérée
        if (xhr_object.readyState == 4) {
            var donner = xhr_object.responseText;
            var data = donner.split("_");
            document.getElementById('quest').innerHTML = data[0];
            document.getElementById('box1').innerHTML = data[1];
            document.getElementById('box2').innerHTML = data[2];
            document.getElementById('box3').innerHTML = data[3];
            document.getElementById('box4').innerHTML = data[4];
            bonne_reponse = data[5];
        }
        return xhr_object.readyState;
    }
    xhr_object.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //  Envoi de la requête
    xhr_object.send(args);

}

function executeSample() {
    // --- Paramètres nécessaires au script PHP
    _question = 1;
    while ((_question % 5) !== 0) // tant que _question n'est pas Quotient de 5
    {
        _question = Math.floor(Math.random() * 170); // _question égal un chiffre aléatoire 
    }

    // --- Appel au script PHP de traitement
    var _data = "question=" + _question; //définition du paramètre POST
    callScript("traitement.php", _data); //envoi paramètre et appel de la fonction 
}

</script>