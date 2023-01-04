
function cadastro() {
    let nome = document.querySelector('#nome').value;
    var user = document.querySelector('#username').value;
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;
    let senhaConfirm = document.querySelector('#confirm-password').value;
    let data = document.querySelector('#data').value;
    

    
    
    // verificação de igualdade entre a senha e a confirmação da senha
    if (senhaConfirm != senha) {
        window.alert('senhas diferentes! tente novamente...');
    }


    // verificação de preenchimento de todos os inputs
    if (nome == '' || user == '' || email == '' || senha == '' || senhaConfirm == '' || data == '') {
        window.alert('Há algo de errado, tente novamente...')
    } else {

        window.location.href = 'Login-Page.HTML';
    }
       
}

function login() {
    let emailUser = document.querySelector('#email_ou_usuario').value;
    let senha_login = document.querySelector('#senhaLogin').value;

    if (emailUser != email || emailUser != user) {
        window.alert('endereço de e-mail ou usuário incorretos!')
    }

    if (senha_login != senha){
        window.alert('senha incorreta!')
    }
}

console.log(obj.usuarios)




















































