/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log("Esercizio 1");

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log("Esercizio 2", pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log("Esercizio 3", pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let element1 = pets[0];

pets.splice(0, 1);

pets.push(element1);

console.log("Esercizio 4", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "targa";
}

console.log("Esercizio 5", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newObj = {
  brand: "Mercedes",
  model: "classe a",
  color: "White",
  licensePlate: "targa",
  trims: ["amg line"],
};

cars.push(newObj);

/* for (i = 0; i < cars.length; i++) {
  delete cars[i].trims;
}

console.log("Esercizio 6", cars);
*/

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log("Esercizio 7", justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 8");

for (i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let index = 0;
console.log("Esercizio 9");

while (numericArray[index] !== 32) {
  console.log(numericArray[index]);
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const charactersNumber = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "g":
      charactersNumber.push(7);
      break;
    case "n":
      charactersNumber.push(12);
      break;
    case "u":
      charactersNumber.push(19);
      break;
    case "z":
      charactersNumber.push(21);
      break;
    case "d":
      charactersNumber.push(4);
      break;
    default:
  }
}
console.log("Esercizio 10", charactersNumber);
