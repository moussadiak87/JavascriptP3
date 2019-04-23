function changeColor(elmnt){
// on stock dans une variable la valeur de l'attribut class de l'élément sur lequel on viens de cliquer.
  var classValue = elmnt.getAttribute('class');
// on utilise la fonction split pour éclater la chaine de caractère contenu dans la variable classValue.on stock le résultat dans la variable classArray qui devient un tableau 
// Atttention les index de tableaux commence a zéro.
  var classArray = classValue.split(' ');
// On applique au texte la couleur correspondant au 2éme élément du tableaux.
  document.getElementById('text').style.color = classArray[1];
}