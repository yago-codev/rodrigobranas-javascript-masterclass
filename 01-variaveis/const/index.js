// Ao utilizar "const", a variável é declarada no escopo da função mas só é
// inicializada posteriormente, RESPEITANDO BLOCO E NAO PERMITINDO REATRIBUICAO NEM REDECLARACAO:

// console.log(pi); // dead zone: área entre a declaração e a inicialização da variável.
const pi = 3.141592;
console.log(pi);

// pi = 3; não é possível reatribuir valores em "const".

// const pi = 3; não é possível redeclarar a variável.

if (true) {
  const pi = 3;
}
// console.log(pi); respeita o escopo, não sendo possível acessar "const" fora do contexto de declaração
