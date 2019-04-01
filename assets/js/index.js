
function submitcheck(element){

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(!usuario){
        alert('Preencha o campo login');
        return false;
    }
    if(!senha){
        alert('Preencha o campo senha');
        return false;
    }

    document.getElementById("login").reset();
    alert('Login efetuado com sucesso!');
    return false;
}