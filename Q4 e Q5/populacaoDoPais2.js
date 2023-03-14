let populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB;

do {
  populacaoA = prompt("Digite a população do país A:");
  populacaoB = prompt("Digite a população do país B:");
  taxaCrescimentoA = prompt("Digite a taxa de crescimento anual do país A (%):");
  taxaCrescimentoB = prompt("Digite a taxa de crescimento anual do país B (%):");

  populacaoA = parseInt(populacaoA);
  populacaoB = parseInt(populacaoB);
  taxaCrescimentoA = parseFloat(taxaCrescimentoA) / 100;
  taxaCrescimentoB = parseFloat(taxaCrescimentoB) / 100;

  if (populacaoA <= 0 || populacaoB <= 0 || taxaCrescimentoA <= 0 || taxaCrescimentoB <= 0) {
    console.log("Os dados informados devem ser maiores que 0.");
    continue;
  }

  let anos = 0;

  while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
  }

  console.log(`Serão necessários ${anos} anos para que a população de A ultrapasse ou fique igual a população de B.`);

  let continuar = prompt("Quer continuar? (s/n)").toLowerCase();
  if (continuar !== "s" && continuar !== "sim") {
    break;
  }

} while (true);
