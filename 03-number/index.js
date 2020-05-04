// O tipo "number" é primitivo, imutável e é
// representado internamente pelo padrão IEEE 764 de 64 bits.

// O JS suporta os sistemas de numeração decimal, hexadecimal, binário e octal:

// O sistema de numeração decimal, de base 10,
// deve iniciar com um número de 1 a 9,
// seguido por números de 0 a 9 com ou sem ponto,
// indicando se é inteiro ou decimal

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// ...

// O sistema de numeração hexadecimal, de base 16,
// deve iniciar com 0x ou 0X, seguido por números de 0 a 9 e letras de A a F

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// A
// B
// C
// D
// E
// F
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 1A
// 1B
// 1C
// 1D
// 1E
// 1F
// 20

// O sistema de numeração binário, de base 2,
// deve iniciar com 0b ou 0B,
// seguido por números de 0 a 1:

// 000000
// 000001
// 000010
// 000011
// 000100
// 000101
// 000110
// 000111
// 001000
// 001001
// 001010
// 001011
// 001100
// 001101
// 001110
// 001111
// 010000
// ...

// o sistema de numeração octal, de base 8,
// deve iniciar com 0, 0o ou 0O,
// seguidos por números de 0 a 7:

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 30
// 31
// 32
// 33
// 34
// 35
// 36
// 37
// 40

console.log(10);
console.log(9.9);
console.log(0xff); // 255 em formato hexadecimal
console.log(0b11); // 3 em formato binário
console.log(010); // 8 em formato binário

// Usando função construtora Number (encaixotando o tipo primitivo no objeto construtor Number)
console.log(new Number(10));
console.log(new Number(9.9));
console.log(new Number(0xff));
console.log(new Number(0b10));
console.log(new Number(0o10));

// Os métodos "toExponential()", "toFixed()", e "toPrecision()" podem
// ser utilizados para mudar a forma como um número é representado
console.log((123.4).toExponential(10)); // 1.2340000000e+2
console.log((123.4).toFixed(10)); // 123.4000000000
console.log((123.4).toPrecision(10)); // 123.4000000
