import { deletarService } from "/javaScript/service/operacoesService.js";

document.addEventListener('DOMContentLoaded', () => {
    filtro();
    fetchClientes();
});

//Adicionando funcionamendo do filtro
function filtro(){
    document.querySelector('#btn-filtro').addEventListener('click', async (event) => {
        
        event.preventDefault();

        //Obetndo os dados
        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
    
        //Montando a url
        let url = '/clientes?';
        if (nome) url += `clt_nome=${encodeURIComponent(nome)}&`;
        if (cpf) url += `clt_cpf=${encodeURIComponent(cpf)}&`;
    
        url = url.slice(0, -1);

        await fetchClientes(url);
    
    });
}

async function fetchClientes(url='/clientes') {
    try {
       
        let response = await fetch(`http://localhost:8080${url}`); 
        const clientes = await response.json();

        //Obtendo o container
        const container = document.querySelector('.all-clientes');
        container.innerHTML = '';

        clientes.forEach(cliente => {

            const clienteDiv = document.createElement('div');
            clienteDiv.classList.add('wrapper');
            clienteDiv.innerHTML = `
                <div class="cliente">
                    <p class="invisible cliente-id">${cliente.clt_id}</p>
                    <p>${cliente.clt_nome}</p>
                    <p>${cliente.clt_cpf}</p>
                </div>
                <div class="acoes">
                    <a class="cont">Contatos</a>
                    <a class="edit">Editar</a>
                    <a class="excl">Excluir</a>
                </div>
            `;

            container.appendChild(clienteDiv);
        });
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
    }
}


//Indo para as páginas dos contatos dos usuários
document.querySelector('.container-index').addEventListener('click', function(event) {
    if (event.target.classList.contains('cont')) {
        event.stopPropagation(); 

        let clienteWrapper = event.target.closest('.wrapper');
        let id = clienteWrapper.querySelector('.cliente-id').textContent;

        // Retirando o menu ao clicar de novo
        let submenuAtual = event.target.querySelector('.cont_submenu');
        if (submenuAtual) {
            submenuAtual.remove();
            return;
        }

        // Remove todos os outros submenus antes de abrir o novo
        document.querySelectorAll('.cont_submenu').forEach(menu => menu.remove());

        let submenu = document.createElement('div');
        submenu.classList.add('cont_submenu');

        submenu.innerHTML = `
            <a href="/contatos?clt_id=${id}">Ver Todos</a>
            <a href="/contatos/cadastro?clt_id=${id}">Novo Contato</a>
        `;

        // Adicionando submenu ao lado do botão clicado
        event.target.appendChild(submenu);
    }
});


//Removendo o submenu ao clicar fora da tela
document.addEventListener('click', () => {
    document.querySelectorAll('.cont_submenu').forEach(menu => menu.remove());
});


//Edição de clientes
document.querySelector('.container-index').addEventListener('click', function(event) {
    if (event.target.classList.contains('edit')) {
        let clienteWrapper = event.target.closest('.wrapper');
        let id = clienteWrapper.querySelector('.cliente-id').textContent;

        // Redireciona para a página de edição com o ID do cliente na URL
        window.location.href = `/edicao?clt_id=${id}`;
    }
});

//Excluindo um cliente e seus contatos
document.querySelector('.container-index').addEventListener('click', async function(event) {
    
    if(event.target.classList.contains('excl')){

        let resposta = confirm('Deseja realmente excluir o usuário?');

        if(!resposta){
            return;
        }

        // Encontrar o cliente mais próximo e pegar o ID correto
        const clienteElement = event.target.closest('.wrapper');
        const clt_id = clienteElement.querySelector('.cliente-id').textContent;


        //Deletando o cliente
        const res = await deletarService(clt_id);

        if(res.ok){
            window.location.reload();
            return;
        }

        alert('Não foi possível atualizar o contato'); 
    }
});

