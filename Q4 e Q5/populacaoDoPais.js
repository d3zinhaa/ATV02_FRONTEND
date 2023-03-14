let populacaoA = 80000;
let populacaoB = 200000;
let taxaCrescimentoA = 0.03;
let taxaCrescimentoB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaCrescimentoA;
  populacaoB += populacaoB * taxaCrescimentoB;
  anos++;
}

console.log(`Serão necessários ${anos} anos para a população de A ultrapasse ou fique igual a população de B.`);
