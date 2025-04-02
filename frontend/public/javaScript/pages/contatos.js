import { editarService } from "/javaScript/service/operacoesService.js";


document.addEventListener('DOMContentLoaded', () => {
    fetchClientes();
});

async function fetchClientes() {
    try {
        //Obetendo o ID do cliente
        const urlParams = new URLSearchParams(window.location.search);
        const clt_id = urlParams.get('clt_id');

        //Obtendo os contatos do cliente
        const response = await fetch(`http://localhost:8080/clientes/${clt_id}`); 
        const cliente = await response.json();
        const contatos = cliente.contatos;

        //Obtendo o container
        const container = document.querySelector('.all-contatos')

        contatos.forEach(contato => {
            const contatoDiv = document.createElement('div');

            contatoDiv.classList.add('contato-wrapper');
            contatoDiv.innerHTML = `
                <div class="contato-main">
                    <p class="invisible contato-id">${contato.con_id}</p>
                    <h2>${contato.con_valor}</h2>
                    <p>${contato.con_tipo}</p>
                    <p><strong>Obs: </strong>${contato.con_observacao}</p>
                </div>
                <div class="acoes-contato">
                    <a class="alt" href="/contatos/edicao/?clt_id=${cliente.clt_id}&con_id=${contato.con_id}">Editar</a>
                    <a class="delete" href="">Excluir</a>
                </div>
            `;

            container.appendChild(contatoDiv);
        });
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
    }
}

//Exluindo contatos de clientes
document.querySelector('.all-contatos').addEventListener('click', async function(event){

    if(event.target.classList.contains('delete')){
        
        event.preventDefault();

        const resposta = confirm('Deseja mesmo deletar?');

        if(!resposta){
            return;
        }


        //Obetendo o ID do cliente
        const urlParams = new URLSearchParams(window.location.search);
        const clt_id = urlParams.get('clt_id');

        //Obtendo os contatos do cliente
        const response = await fetch(`http://localhost:8080/clientes/${clt_id}`); 
        const cliente = await response.json();

        // Encontrar o cliente mais próximo e pegar o ID correto
        const clienteElement = event.target.closest('.contato-wrapper');
        const con_id = clienteElement.querySelector('.contato-id').textContent;

        //Deletando o contato
        cliente.contatos = cliente.contatos.filter(con => con.con_id !== Number(con_id));

        const contatoDeletado = {
            clt_id: Number(clt_id),
            clt_nome: cliente.clt_nome,
            clt_endereco: cliente.clt_endereco,
            clt_cpf: cliente.clt_cpf, 
            clt_data_nasc: cliente.clt_data,
            contatos: cliente.contatos 
        };

        const res = await editarService(contatoDeletado);
        
        if(res.ok){
            window.location.reload();
            return;
        }
        
        alert('Não foi possível deletar o contato');  
    }
});