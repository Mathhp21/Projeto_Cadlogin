// Implementa acesso para a tela de login
function acessar (){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    //Implementa estrutura que testa se todos os campos foram preenhcidos
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    } else{
        window.location.href = "cadastro.html";
    }
}