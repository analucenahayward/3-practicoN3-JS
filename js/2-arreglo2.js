// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
// almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
// luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudades = [];

do {
  let prueba = prompt("ingrese una ciudad");
  if (prueba !== null) {
    ciudades.push(prueba);
  }
  for (let i = 0; i < ciudades.length; i++) {
    document.write("<br>" + ciudades);
  }
} while (confirm("queres agregar mas ciudades?"));

document.write("<br>" + ciudades.length);