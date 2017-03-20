<?php
// --- Récupération du paramètre POST
if ( isset($_POST["question"]) && !empty($_POST["question"]) ) //Détermine si question est définie et est différente de NULL.
  $_question = $_POST["question"];
else
  $_question = null;

// --- Exécution du traitement
if ( $_question != null ){

  $fichier = file("question.txt"); // Nom du fichier à afficher, son adresse de localisation

  for($i = 0; $i <= 4; $i++)
  { // Départ de la boucle

    $ligne_courante = $fichier[$_question + $i]; // $ligne_courante = le contenu de ligne correspondante du fichier
    /* Gestion de la Bonne Réponse */
    if(strpos($ligne_courante, '!'))  // si dans la question il y a un point d'exclamation
    {
      $lastchiffre = substr($_question + $i,-1); //on enregistre le dernier chiffre de la ligne recherché pour 15 c'est 5

      if ($lastchiffre == 6 || $lastchiffre == 7 || $lastchiffre == 8 || $lastchiffre == 9 )
      {
        $bonne_reponse = $lastchiffre -5;
      }
      else
      {
        $bonne_reponse = $lastchiffre;
      }
    }
    /* fin de Gestion de la Bonne Réponse */

    switch ($i) {
    case 0:
      $data_qestion = $ligne_courante;
      break;
    case 1:
      $data_reponse_1 = substr($ligne_courante,0,-2);  // affiche la réponse sans le dernier caractère soit . ou ! (bugger sa deverait ètre -1)
                                                       // bah non tu es juste mauvais il fallait compter le <cr>
      break;
    case 2:
      $data_reponse_2 = substr($ligne_courante,0,-2);
      break;
    case 3:
      $data_reponse_3 = substr($ligne_courante,0,-2);
      break;
    case 4:
      $data_reponse_4 = substr($ligne_courante,0,-2);
      break;
    }

  } // Fin de la boucle

  echo $data_qestion, '_', $data_reponse_1, '_',$data_reponse_2, '_', $data_reponse_3, '_',$data_reponse_4, '_', $bonne_reponse;
}
?>
