let nota;

do {
    nota = parseFloat(prompt("Escreva uma nota de 0 a 10: "));
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        alert("Valor inválido. Tente outro valor entre 0 e 10.");
    }
} while (nota < 0 || nota > 10 || isNaN(nota));

alert("A nota que você digitou foi " + nota + ".");
