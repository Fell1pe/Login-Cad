// Validação de preenchimento
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }else{
        alert('Campos preenchidos com sucesso');
       
        window.location.href = 'cadastro.html';
    }
}
 
//Função de criação do array para armazenamento de dados
 
var dadosLista = [];
var emailLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    //
    if(nomeUser && (emailUser && emailUser.includes('@') && emailUser.includes('.'))){
        dadosLista.push(nomeUser);
        emailLista.push(emailUser);
        // console.log(dadosLista);
        criarLista();
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
        return false;
    }
    else{
        alert("Favor informar o nome e email");
    }
}
// FUNÇÃO DE CRIAÇÃO DE LISTA
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++){ // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emailLista[i]+ "</td><td> <button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;

    }
}
// FUNÇÃO PARA EXCLUIR NOME DE LISTA
function excluir(i){
    dadosLista.splice((i - 1), 1);
    emailLista.splice((i - i), 1);
    document.getElementById('tabela').deleteRow(i);
        // ADICIONA SPLICE QUE CRIA E EXCLUI ELEMENTOS DE UM ARRAY
        // PUXA ELEMENTO ID DA TABELA E EXCLUI i DA FUNÇÃO
} 
// FUNÇÃO PARA EDITAR NOME E EMAIL DA LISTA
// CRIA FUNÇÃO EDITAR
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    document.getElementById("emailUser").value = emailLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
    emailLista.splice(emailLista[(i - 1)], 1);
        // PUXA ID nomeUser e ID emailUser E FAZ QUE AMBOS VOLTE A FUNÇÃO DE ESCREVE-LOS NOVAMENTE
            // NOVAMENTE ADICIONA SPLICE QUE CRIA E EXCLUI ARRAYS
}


