// Validação de preenchimento
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert('favor preencher todos os campos');
    }
    else{
        //alert('campos preenchidos com sucesso');
        window.location.href = 'cadastro.html';
    }
}

//função de criação de array para armazenamento de nomes

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById('nomeUser').value = "";     
    }
    else{
        alert("favor informar o nome");
    }
}

// FUNÇÃO DE CRIAÇÃO DE LISTA

function criaLista(){
    let tabela = document;getElementById('tabela').innerHTML = "<tr><th>Nome Usuáiro</th><th>Ações</th></tr>";
}