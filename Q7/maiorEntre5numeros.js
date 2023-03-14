let numeros = [];

// Lê os 5 números
for (let i = 1; i <= 5; i++) {
  let numero = Number(prompt(`Digite o número ${i}:`));
  numeros.push(numero);
}

// Encontra o maior número
let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

// Imprime o maior número
console.log(`O maior número é ${maior}`);
