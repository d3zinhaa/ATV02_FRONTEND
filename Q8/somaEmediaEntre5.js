let numeros = [];

// Lê os 5 números
for (let i = 1; i <= 5; i++) {
  let numero = Number(prompt(`Digite o número ${i}:`));
  numeros.push(numero);
}

// Calcula a soma dos números
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

// Calcula a média dos números
let media = soma / numeros.length;

// Imprime a soma e a média
console.log(`A soma dos números é ${soma}`);
console.log(`A média dos números é ${media}`);
