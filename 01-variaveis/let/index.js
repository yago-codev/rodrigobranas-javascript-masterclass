// Ao utilizar "let", a variável é declarada no escopo da função mas só é
// inicializada posteriormente, RESPEITANDO BLOCO E PERMITINDO A REATRIBUICAO,
// MAS NAO A REDECLARACAO:

// console.log(pi); não é possível acessar o conteúdo de "let" antes de sua inicialização, ao contrário de "var".
let pi = 3.141592;
console.log(pi);

// é possível utilizar a reatribuição em "let":
pi = 3;
console.log(pi);

// não é possível utilizar a "redeclaração" em "let":
// let pi = 3.141592;
// console.log(pi); // retorna erro porque a variável já foi declarada

if (true) {
  let pi = 3.141592;
  console.log(pi);
}
console.log(pi); // vai imprimir o valor do "pi" declarado na linha 10
