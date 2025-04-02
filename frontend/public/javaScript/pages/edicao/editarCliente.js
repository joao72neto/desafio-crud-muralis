import { editarService } from "/javaScript/service/operacoesService.js";
import { buscarClienteIdService } from "/javaScript/service/operacoesService.js";
import { validarCliente } from "/javaScript/validations/validacoesCliente.js";
import { mascarasCliente } from "/javaScript/validations/validacoesCliente.js";

mascarasCliente();

document.addEventListener('DOMContentLoaded', async () => {

    //Obetendo o ID do cliente
    const urlParams = new URLSearchParams(window.location.search);
    const clt_id = urlParams.get('clt_id');

    //Chamando o cliente por id
    const cliente = await buscarClienteIdService(clt_id);

    //Preenchendo o forms com os dados já cadastrados
    document.querySelector('#nome').value = cliente.clt_nome;
    document.querySelector('#endereco').value = cliente.clt_endereco;
    document.querySelector('#cpf').value = cliente.clt_cpf;
    let dataFormatada = new Date(cliente.clt_data_nasc).toISOString().split('T')[0];
    document.querySelector('#data').value = dataFormatada;
});


//Função que editar um cliente já cadastrado
document.querySelector('form').addEventListener('submit', async function(event){
  
    event.preventDefault();

    if(!validarCliente(event)){
        return;
    }

    //Obetendo o ID do cliente
    const urlParams = new URLSearchParams(window.location.search);
    const clt_id = urlParams.get('clt_id');

    //Chamando o cliente por id
    const cliente = await buscarClienteIdService(clt_id);

    //Pegando dados do formulário
    const formDados = new FormData(event.target);
    let dados = Object.fromEntries(formDados.entries());

    
    //Preparando os dados para passar para o back
    const clienteEditado = {
        clt_id: clt_id,
        clt_nome: dados.nome,
        clt_endereco: dados.endereco,
        clt_cpf: dados.cpf, 
        clt_data_nasc: dados.data,
        contatos: cliente.contatos 
    };

    //Atualizando o cliente
    const res = await editarService(clienteEditado);

    if(res.ok){
        alert('Cliente atualizado com seucesso');
        return;
    }

    alert('Não foi possível atualizar o cliente');

});

