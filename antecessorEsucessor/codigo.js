function antecessorEsucessor(){
   // Pede ao usuário para inserir um número
    let numero = parseInt(prompt("Digite um número:"));

   //antecessor
    let ant = numero + -1;
   //sucessor
    let suc = numero + 1;

   // Exibe o resultado
    alert("O antecessor é: " + ant + "\nO sucessor é: " + suc);
}