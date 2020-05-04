// NUNCA DECLARE VARIAVEIS SEM A PALAVRA RESERVADA "VAR", "LET" OU "CONST".
// DEVEMOS EVITAR A UTILIZACAO DO "VAR".

// (function () {
//   var pi = 3.141592;
// })();
// console.log(pi); // pi não estará acessível fora da função auto-invocável porque declaramos-no com o a palavra reservada "var"

(function () {
  pi = 3.141592; // quando declaros uma variável sem utilizar "var, let ou const", estaremos sujando o escopo global
})();
console.log(pi); // ao não utilizarmos "var" na declaração da variável, poderemos acessar-la a partir de qualquer lugar

if (true) {
  console.log(pi);
}
