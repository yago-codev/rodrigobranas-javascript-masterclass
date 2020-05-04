// Os tipos de dados em JavaScript se dividem em:
// - Primitivos.
// - Objetos.

// Os tipos primitivos são imutáveis, ou seja,
// ao longo do tempo seu valor não é alterado

console.log(typeof 10); // number
console.log(typeof "JavaScript"); // string
console.log(typeof true); // boolean
console.log(typeof Symbol("iterator")); // symbol
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// Utilizando "wrappers" para realizar operações nos tipos primitivos:
console.log((10).toFixed(2)); // 10.00
console.log("JavaScript".replace("a", 4)); // J4vaScript
console.log(typeof true.toString()); // converte pra string
console.log(typeof Symbol("iterator").toString()); // converte pra string

// Objetos são valores que repesentam uma referência em memória que pode ser alterada:
console.log(
  typeof function sum(a, b) {
    return a + b;
  }
); // function

console.log(typeof { name: "Linus Torvald" }); // object

console.log(typeof [1, 2, 3, 4, 5, 6, 7, 8, 9]); // object

console.log(typeof /[a-zA-Z_$]/); // object

console.log(typeof new Date()); // object
