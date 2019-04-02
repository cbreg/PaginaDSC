document.querySelector("#numeros").addEventListener("submit", function(e){

    var numero1 =  parseInt(document.getElementById("numero1").value);
    var numero2 =  parseInt(document.getElementById("numero2").value);
    var numero3 =  parseInt(document.getElementById("numero3").value);

    var soma =  numero1 + numero2 + numero3;

    alert("Soma = " + soma);
    ehPar(numero1);
    ehPar(numero2);
    ehPar(numero3);
    return false;
    
});

function ehPar(numero){
    var tipo = (numero % 2 == 0) ? " é par." : " é impar."; 
    alert("Número " + numero + tipo);
}