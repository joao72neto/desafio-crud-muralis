import { editarService } from "/javaScript/service/operacoesService.js";


document.addEventListener('DOMContentLoaded', async () => {

    //Obetendo o ID do cliente e do Contato
    const urlParams = new URLSearchParams(window.location.search);
    const clt_id = urlParams.get('clt_id');
    const con_id = urlParams.get('con_id');


    //Chamando o cliente por id
    let response = await fetch(`http://localhost:8080/clientes/${clt_id}`); 
    const cliente = await response.json();

    const contato = cliente.contatos.find(con => con.con_id == con_id);

    //Preenchendo o forms com os dados já cadastrados
    document.querySelector('#tipo').value = contato.con_tipo;
    document.querySelector('#valor').value = contato.con_valor;
    document.querySelector('#obs').value = contato.con_observacao;
});


//Função que editar um cliente já cadastrado
document.querySelector('form').addEventListener('submit', async function(event){
  
    event.preventDefault();

    //Obetendo o ID do cliente
    const urlParams = new URLSearchParams(window.location.search);
    const clt_id = urlParams.get('clt_id');
    const con_id = urlParams.get('con_id');

    //Chamando o cliente por id
    let response = await fetch(`http://localhost:8080/clientes/${clt_id}`); 
    const cliente = await response.json();

    //Pegando dados do formulário
    const formDados = new FormData(event.target);
    let dados = Object.fromEntries(formDados.entries());

    
    //Preparando os dados para passar para o back    
    const index = cliente.contatos.findIndex(con => con.con_id == con_id)

    cliente.contatos[index] = {
        con_tipo: dados.tipo,
        con_valor: dados.valor,
        con_observacao: dados.obs
    }

    const contatoEditado = {
        clt_id: Number(clt_id),
        clt_nome: cliente.clt_nome,
        clt_endereco: cliente.clt_endereco,
        clt_cpf: cliente.clt_cpf, 
        clt_data_nasc: cliente.clt_data,
        contatos: cliente.contatos 
    };

    //Editando o contato
    const res = await editarService(contatoEditado);

    if(res.ok){
        alert('Contato atualizado com seucesso');
        return;
    }

    alert('Não foi possível atualizar o contato'); 
});

