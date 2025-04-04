import { validarContato } from "/javaScript/validations/validacoesContato.js";
import { editarService } from "/javaScript/service/operacoesService.js";
import { buscarClienteIdService } from "/javaScript/service/operacoesService.js";


//Função que cadastra um contato novo
document.querySelector('form').addEventListener('submit', async function(event){
  
    event.preventDefault();

    if(!validarContato(event)){
        return;
    }

    //Pegando dados do formulário
    const formDados = new FormData(event.target);
    let dados = Object.fromEntries(formDados.entries());

    //Obetendo o ID do cliente
    const urlParams = new URLSearchParams(window.location.search);
    const clt_id = urlParams.get('clt_id');

    //Chamando o cliente por id
    const cliente = await buscarClienteIdService(clt_id);

    //Preparando os dados para cadastro
    cliente.contatos.push(
        {
            con_tipo: dados.tipo,
            con_valor: dados.valor,
            con_observacao: dados.obs
        }
    )

    const clienteContato = {
        clt_id: clt_id,
        clt_nome: cliente.clt_nome,
        clt_endereco: cliente.clt_endereco,
        clt_cpf: cliente.clt_cpf, 
        clt_data_nasc: cliente.clt_data_nasc,
        contatos: cliente.contatos
    };

    //Editando o contato
    const res = await editarService(clienteContato);

    if(res.ok){
        alert('Contato cadastrado com seucesso');
        window.location.href = `/contatos?clt_id=${clt_id}`;
        return;
    }

    alert('Não foi possível cadastrar o contato');  
});

