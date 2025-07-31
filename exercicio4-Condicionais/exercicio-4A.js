const nota = 85;
let classificacao = " ";

if (nota <= 59) {
    classificacao = "F";
} else if (nota <= 69) {
    classificacao = "D";
} else if (nota <= 79) {   
    classificacao = "C";
} else if (nota <= 89) {
    classificacao = "B";
} else {
    classificacao = "A";
}

console.log(classificacao);