import { validarCliente } from "/javaScript/validations/validacoesCliente.js";
import { cadastrarService } from "/javaScript/service/operacoesService.js";
import { mascarasCliente } from "/javaScript/validations/validacoesCliente.js";

mascarasCliente();

//Função que cadastra um cliente novo
document.querySelector('form').addEventListener('submit', async function(event){
  
    event.preventDefault();

    if(!validarCliente(event)){
        return;
    }

    //Pegando dados do formulário
    const formDados = new FormData(event.target);
    let dados = Object.fromEntries(formDados.entries());

    //Preparando os dados para passar para o back
    const cliente = {
        clt_nome: dados.nome,
        clt_endereco: dados.endereco,
        clt_cpf: dados.cpf, 
        clt_data_nasc: dados.data,
        contatos: []  
    };

    console.log(cliente)

    //Cadastrando o cliente
    const res = await cadastrarService(cliente);

    if(res.ok){
        alert('Cliente cadastrado com sucesso!');
        return;
    }

    alert('Não foi possível cadastrar o cliente'); 
});

