// Ciclo de vida de uma variável:

// Declaração (1˚ ciclo):
// O nome da variável é registrado no contexto de execução, também conhecido como escopo, da função.

// Inicialização (2˚ ciclo):
// A variável é inicializada com o valor "undefined".

// Atribuição (3˚ ciclo):
// Um valor é atribuído para a variável.

// Ao utilizar "var", a variável é declarada e inicializada no escopo da função,
// NAO RESPEITANDO BLOCO E PERMITINDO A REDECLARACAO E REATRIBUICAO.

// Sempre quando estivermos executando uma sentença de código dentro do escopo global,
// estaremos executando o código dentro de uma "função invisível".
// Essa é uma característica do sistema de módulos do Node.

console.log(pi);
var pi = 3.141592;
console.log(pi);

// reatribuição de valores dentro de "var":
pi = 3;
console.log(pi);

// redeclaração da variável:
var pi = 3;
console.log(pi);

if (true) {
  var pi = 3.141592;
}
console.log(pi);
