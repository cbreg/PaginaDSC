
function submitcheck(element){

    var numero = parseInt(document.getElementById('numero').value);
    
    if(!numero){
        document.getElementById('erro').innerHTML = "Preencha um número";     
        return false;
    }

    document.getElementById('resultado').innerHTML = calculaFatorial(numero);     
    return false;
}

function calculaFatorial(numero, resultado = 1){

    if(numero - 1 <= 0){
        return resultado;
    }

    return calculaFatorial((numero -1) , (resultado * numero ));
}

