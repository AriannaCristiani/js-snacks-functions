/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function onlyletterA () {

}

// Invoca la funzione qui e stampa il risultato in console

//Seleziona dall'array solo i nomi che iniziano con la lettera 'A'
//  -SE inizia con 'A' stampalo in console

for (i=0 ; i<names.length ; i ++){
    // console.log(i)

    let fullNames = names [i]
    // console.log(fullNames)

    onlyletterA = fullNames.charAt(0) === 'A';
    // console.log(onlyletterA)

    if (onlyletterA === true){
        console.log(fullNames)
        
    }

}



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]