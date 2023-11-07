/*var n = prompt(" Entrer votre table");
for (i = 1; i < 10; i++) {
    document.write(i+" * "+ n +"="+ n*i+"</br>");
  }*/

  var a = parseInt(prompt("entrer le 1er npmbre de votre choix"));
  var b = parseInt(prompt("entret le deuxieme nombre de votre choix"));
    var somme = 0 ;
  for(i = a; i<b; i++){
    var somme =  somme + i;
  }
  document.write(somme);