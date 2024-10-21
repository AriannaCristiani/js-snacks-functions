/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vocali (){

}


// Invoca la funzione qui e stampa il risultato in console

for (i=0 ; i < word.length ; i++) {
    let vocali = word.charAt(i)
    // console.log(vocali)

    if (vocali === 'a'){
        console.log(vocali)
    }  else if (vocali === 'e'){
        console.log(vocali)
    } else if (vocali === 'i'){
        console.log(vocali)
    } else if (vocali === 'o'){
        console.log(vocali)
    } else if (vocali === 'u'){
        console.log(vocali)
    } 
}

//Risultato atteso se si passa 'javascript': 3 (a, a, i)