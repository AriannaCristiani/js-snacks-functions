/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function onlyletterA (array, letter='') {
const result = [];

for (i=0 ; i<array.length ; i ++){
    // console.log(i)

    const element = array[i].toLowerCase();
    // console.log(element);

    if (element[0] === letter.toLocaleLowerCase()){
        // console.log(element, true)
        result.push(element)
    } else {
        // console.log(element, false)
    }
    
    
}

return result;

}

// Invoca la funzione qui e stampa il risultato in console


console.log (onlyletterA  (names,'A'))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]