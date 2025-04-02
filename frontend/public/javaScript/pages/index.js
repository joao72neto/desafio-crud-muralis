import { deletarService } from "/javaScript/service/operacoesService.js";


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

