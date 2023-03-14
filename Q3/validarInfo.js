let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let salario = prompt("Qual o seu salário?");
let sexo = prompt("Digite o seu sexo (f/m):");
let estadoCivil = prompt("Qual seu estado civil (s/c/v/d)?"); //solteiro, casado, viuvo, ou divorciado.

if (nome.length <= 3) {
  console.log("O nome deve ter mais de 3 caracteres.");
} else if (idade < 0 || idade > 150) {
  console.log("A idade deve ser entre 0 e 150 anos.");
} else if (salario <= 0) {
  console.log("O salário tem que ser maior que 0.");
} else if (sexo !== "f" && sexo !== "m") {
  console.log("O sexo deve ser 'f' ou 'm'.");
} else if (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d") {
  console.log("O estado civil deve ser 's', 'c', 'v' ou 'd'."); //solteiro, casado, viuvo, ou divorciado.
} else {
  console.log("Dados válidos!");
}
