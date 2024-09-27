/*Escreva um código em javascript que inicialize uma estrutura de dados com o nome e nota
de 5 alunos.
Crie botões para executar cada uma das seguintes funções:
• função “maiorNota” para exibir na página os dados do aluno com MAIOR nota;
• função “menorNota” para exibir na página os dados do aluno com MENOR nota;
• função “listaAlunos” para exibir na página os dados de todos os alunos;*/

let nota1=8, nota2, nota3;

function calcula_media()
{
    
    nota1 = Number(prompt("Informe sua primeira nota:"));
    nota2 = Number(prompt("Informe sua segunda nota:"));
    nota3 = Number(prompt("Informe sua terceira nota:"));

    let media = (nota1 + nota2 + nota3) / 3;
    console.log(media);
    
    
                let status;

                if(media >=6 )
                 status="Aprovado";
                else
                status ="Reprovado";

            resposta =   "<p>A média das notas é: </p>"
                "<p>A nota 1 é: " +nota1+ "</p>"
                "<p>A nota 2 é: " +nota2+ "</p>"
                "<p>a nota 3 é: " +nota3+ "</p>"
                "<h3>O resultado da média é: " + media.toFixed(2)+ "</h3>"    

    document.getElementById('estruturas').innerHTML = resposta;
}
// Array com nomes e notas dos alunos
let alunos = [ { nome: "Alice", nota: 92 },
{ nome: "Bento", nota: 38 },
{ nome: "Carol", nota: 88 },
{ nome: "Marcos", nota: 65 },
{ nome: "Elaine", nota: 72 } ];

function lista_alunos(){
    let resposta;
    for(let i=0; i < alunos.length; i++){
            resposta = "<p>Aluno: " +alunos[i].nome+ "<br>"+
                        "Nota: " +alunos[i].nota+ "</p>";
            document.getElementById('estruturas').innerHTML += resposta;                        
    }
    
}
