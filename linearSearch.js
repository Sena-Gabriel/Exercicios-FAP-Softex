/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.
Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.
Codifique a solução mais eficiente para buscar o número 20 no array.*/

function linearSearch(Arr, i) {
    for (var i = 0; i < Arr.length; i++) {
      if (Arr[i] === 20) { // Found it!
        return i;
    }
    }
    return -1;
}
console.log(linearSearch([15, 8, 10, 25, 12, 30, 5, 20, 18, 7], 20))