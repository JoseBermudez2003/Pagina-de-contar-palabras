 function reset() {

        document.getElementById("textArea").value="";

  }

  function contar(){

  	let counter= document.getElementById("textArea").value;  //obtenemos el valor que tiene el textArea,osea las palabras que estan ahi
  	let contador = 0; //definiimos el contador en 0
  	let palabras= counter.split (" "); //agarramos la primera variable (counter) y dividimos cada valor
  	                                   // para que cuando haya un espacio nos lo cuente como una palabra

  	contador = palabras.length;  //el contador lo definimos ahora con el numero de palabras segun las divisiones que haya hecho el split
  

  	alert ("hay: " + contador + " palabras")
  }