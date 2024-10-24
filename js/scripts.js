
// # Ejercicios

// ## Bucles Determinados

// - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.
const backCount = number =>{
    for (let index = number; index >= 0; index--) {
        console.log(index)
    }
}
console.log(backCount(8));

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
const sumArrays = array =>{
    let sum = 0;
    for (const element of array) {
        sum = sum + element;
    }
    return sum;
}

console.log(sumArrays([1,2,3,4,5,6,7,8,9,1]))

// - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

//   4 x 0 = 0
//   4 x 1 = 4
//   4 x 2 = 8
//   4 x 3 = 12
//   4 x 4 = 16
//   4 x 5 = 20
//   4 x 6 = 24
//   4 x 7 = 28
//   4 x 8 = 32
//   4 x 9 = 36
//   4 x 10 = 40

const multiplicationTable = number =>{
    for (let index = 0; index <=10; index++) {
        console.log(`${number} X ${index} = ${number*index}`)
    }
}
console.log(multiplicationTable(4));

// - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

//   4 x 10 = 40
//   4 x 9 = 36
//   4 x 8 = 32
//   4 x 7 = 28
//   4 x 6 = 24
//   4 x 5 = 20
//   4 x 4 = 16
//   4 x 3 = 12
//   4 x 2 = 8
//   4 x 1 = 4
//   4 x 0 = 0

const inverseMultiplicationTable = number =>{
    for (let index = 10; index >=0; index--) {
        console.log(`${number} X ${index} = ${number*index}`)
    }
}
console.log(inverseMultiplicationTable(4));

// - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//   - "naciste en el año X"
//   - "En el año X cumpliste 1 año"
//   - "En el año X cumpliste 2 años"
//   - "En el año X cumpliste 3 años"
//     ....

const yearOfBirth = (year,birth) =>{
    console.log(`naciste en el año ${year-birth}`);
    let contador = 1;
    for (let index = year-birth+1; index <= year; index++) {
        console.log(`En el año ${index} cumpliste ${contador++} años`)
    }
}
console.log(yearOfBirth(2024,25));

// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const pairNumbers = (number1, number2) =>{
    for (let index = number1; index <= number2; index++) {
        if(index % 2 ===0){
            console.log(index)
        }
    }
}
console.log(pairNumbers(2,12));

// - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const randomArrays = ()=>{
    array1 = [];
    array2 = [];
    array3 = [];
    for (let index = 0; index < 5; index++) {
        array1.push(Math.floor(Math.random()*10));
        array2.push(Math.floor(Math.random()*10));
    }
    for (const element of array1) {
        for (const element2 of array2) {
            if(element===element2 ){
                array3.push(element);
            }
        }
    }
   
    return array3.length!=0?`Los arrays ${array1} y ${array2} Se han repetido los valores ${array3}`:`Los arrays ${array1} y ${array2}. No se repitio ningun numero`;
    
}
console.log(randomArrays());

// - Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

const primeNumber = number =>{
    if (number <= 1) {
        return `el numero ${number} no es primo`; 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return `el numero ${number} no es primo`; 
        }
    }
    return `el numero ${number} es primo`; 
}

console.log(primeNumber(2));
// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".
//   Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

const multiplicationOfNumbers = number =>{
    for (const element of number) {
        console.log(`Número: ${element} - Cuadrado: ${Math.pow(element,2)} - Cubo: ${Math.pow(element,3)}`);
    }
}

console.log(multiplicationOfNumbers([1,2,3,4,5,6,7,8,9,1]))

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vocalsUppercase = word =>{
    let newWord = '';
    for (const element of word) {
        if(element=='a'|| element === 'e' || element === 'i' || element==='o'|| element==='u'){
            newWord += element.toUpperCase();
        }else{
            newWord += element;
        }
    }
    return newWord;
}

console.log(vocalsUppercase('casa'));

// - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
//   a: 3,
//   e: 3,
//   i: 1,
//   o: 1,
//   u: 1
const vocalsCount = phrase =>{
    const vocals = 'aeiou';
    let result = '';

    for (let element of vocals) {
        let cont = 0;
        for (let element2 of phrase) {
            if (element2 === element) {
                cont++;
            }
        }
        result += `${element}: ${cont}  `;
    }
    return result;
}

console.log(vocalsCount('buens dias mi amig'));

// - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. 
// Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

const wordZigzag = (word1,word2) =>{
    let result = '';
    let cont = 1;

    if(word1.length<=word2.length){
        for (let index = 0; index < word1.length; index++) {
            result+=word1[index];
            result+=word2[index];
        }
        return result;
    }else{
        for (let index = 0; index < word2.length; index++) {
            result+=word1[index];
            result+=word2[index];
        }
        return result;
    }
}

console.log(wordZigzag('adios','hola'));


// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. 
// Si recibe "Mariposas" deberá imprimir "sasopiraM"

const invertedWord = word =>{
    let result = ''
    for (let index = word.length-1; index >= 0; index--) {
        result += word[index];
    }
    return result;
}

console.log(invertedWord('Mariposas'));

// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, 
// es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola 
// ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']

const firstLetter = array => {
    let result = [];
    for (const element of array) {
        //No puedo hacer un push con el tuUpperCase
        const initial = element.charAt(0).toUpperCase();
        const last =element.charAt(element.length-1).toUpperCase();
        result.push(initial,last);
    }
    return result;
}

console.log(firstLetter(['hola', 'adios', 'gato', 'perro', 'casa']));