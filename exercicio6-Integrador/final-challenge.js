 const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

let aprovados = 0;
let reprovados = 0;
let mediaTurma = 0;
let melhorAluno = " ";
let melhorMedia = 0;

for(let i =0; i < students.length; i++) {
    const student = students[i];

    //Desafio a = calcular a média das notas
    const totalGrades = students[i].grades.reduce((acc, grade) => acc + grade, 0);
    const average = totalGrades / students[i].grades.length;

    student.averageGrade = parseFloat(average.toFixed(2));

    //Desafio b = verificar se o aluno está aprovado ou reprovado
    //Desafio c = contar quantos alunos foram aprovados e reprovados
    if(student.averageGrade >= 70) {
        student.status = "Aprovado";
        aprovados++;
    } else {
        student.status = "Reprovado";
        reprovados++;
    }

    //Desafio d =  aluno com a melhor média
    if(student.averageGrade > melhorMedia) {
        melhorAluno = student.name;
        melhorMedia = student.averageGrade;
    }

}

//Desafio e = calcular a média da turma
somaDaTurma = students.reduce((acc, student) => acc + student.averageGrade, 0);
mediaTurma = parseFloat((somaDaTurma / students.length).toFixed(2));


console.log(students);

console.log(`Total de alunos aprovados: ${aprovados}`);
console.log(`Total de alunos reprovados: ${reprovados}`);
console.log(`Média da turma: ${mediaTurma}`);
console.log(`Aluno com a melhor média: ${melhorAluno} com média ${melhorMedia}`);

