//Contatos do usuário
document.querySelectorAll('.cont').forEach(botao => {
    botao.addEventListener('click', function (event) {

        event.stopPropagation();
      
        
        //Obetendo o id
        let clienteWrapper = this.closest('.wrapper');
        let id = clienteWrapper.querySelector('.cliente-id').textContent;

        //Retirando o menu ao clicar de novo
        let submenuAtual = this.querySelector('.cont_submenu');

        if(submenuAtual){
            submenuAtual.remove();
            return;
        }

        document.querySelectorAll('.cont_submenu').forEach(menu => menu.remove());

        let submenu = document.createElement('div');
        submenu.classList.add('cont_submenu');

        submenu.innerHTML = `
            <a href="../pages/contatos.html" >Ver Todos</a>
            <a href="../pages/cadastro/cadastroContato.html">Novo Contato</a>
        `;

        // Adicionando submenu ao lado do botão clicado
        this.appendChild(submenu);

    });
});


//Removendo o submenu ao clicar fora da tela
document.addEventListener('click', () => {
    document.querySelectorAll('.cont_submenu').forEach(menu => menu.remove());
});


//Edição de clientes
document.querySelectorAll('.edit').forEach(button => {

    button.addEventListener('click', function(){

        let clienteWrapper = this.closest('.wrapper');
        let id = clienteWrapper.querySelector('.cliente-id').textContent;

        window.location.href = `../../pages/edicao/editarCliente.html`;
    });
});