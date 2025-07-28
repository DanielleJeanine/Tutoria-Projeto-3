const valores = [12, 4, 19, 7, 3, 15];
let menor = valores[0];
for (let i = 1; i < valores.length; i++) {
    if (valores[i] < menor) {
        menor = valores[i];
    }
}
console.log("\nMenor valor do array:", menor);