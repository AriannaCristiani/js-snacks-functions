/* Scrivi una funzione che accetti un array di nomi 
e restituisca nuovo un array con le iniziali di ogni parola 
dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(names)

// Dichiara la funzione qui.

function takeOneLetter () {

}

// Invoca la funzione qui e stampa il risultato in console

//Per ogni nome:
//  -stampa unicamente l'iniziale

for (let i = 0; i < names.length; i++) {
		//console.log(i)
		let fullName = names [i]
        // console.log(i, fullName)

        takeOneLetter = fullName.charAt(0)
        console.log(takeOneLetter)
	} 

   


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]