/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowels (string) {
 string = string.toLowerCase();
 let count = 0;

 for (i=0 ; i < string.length ; i++) {
   
    // console.log(string[i])

    const letter = string[i]

    if (letter === 'a'){
        count = count +=1
        console.log(letter)
    }  else if (letter === 'e'){
        count = count +=1
        console.log(letter)
    } else if (letter === 'i'){
        count = count +=1
        console.log(letter)
    } else if (letter === 'o'){
        count = count +=1
        console.log(letter)
    } else if (letter === 'u'){
        count = count +=1
        console.log(letter)
    }
    
}

return count;

}


// Invoca la funzione qui e stampa il risultato in console

console.log(vowels(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)