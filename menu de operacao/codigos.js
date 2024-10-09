function calcula(){  

        let operacao = parseInt(prompt("Qual operação matemática deseja fazer\n[1] ADIÇÃO: \n[2]SUBTRAÇÃO: \n[3]MULTIPLICAÇÃO: \n[4]DIVISÃO: \n")); 
        
        let num1 = parseInt(prompt("Quais numeros deseja usar:\nO primeiro número: "));
        let num2 = parseInt(prompt("O segundo número: "));
        
        switch(operacao){

        
        case 1:
            
            let soma =  num1 + num2;
            
            alert("A soma de: " + num1 + "+" + num2+ "= " +soma);
        break;

        case 2:
            
            let sub = num1 + num2;
        
            alert("A subtração de: " + num1 + "-" + num2+ "= " +sub);
        break;

        case 3:
            
            let multi =  num1 * num2;
            
            alert("A multiplicação de: " + num1 + "x" + num2+ "= " +multi);
        break;
        
        case 4:

        let divs;
        if (num2 === 0) {
            alert("Divisão por zero não é permitida.");
        } else {
            divs = num1 / num2;
            alert("A divisão de: " + num1 + " ÷ " + num2 + " = " + divs);
        }
        break;
        default: 
         prompt("Operação inválida!");
        }

}
