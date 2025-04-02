import { buscarClienteIdService } from '/javaScript/service/operacoesService.js';

//Popup que mostra todos os dados do cliente cadastrado
document.querySelector('.container-index').addEventListener('click', async function(event) {

    // Verifica se o clique foi em um `.cliente`
    const clienteElement = event.target.closest('.cliente');
    if (!clienteElement) return;

    const clt_id = clienteElement.querySelector('.cliente-id').textContent;

    // Criando o popup
    let popup = document.createElement('div');
    popup.classList.add('popup');

    let cliente = await buscarClienteIdService(clt_id); 

    // Mostrando todos os dados no popup
    popup.innerHTML = `
        <div class="button-popup">
            <button class="fechar-popup">X</button>
        </div>
        <h2>Dados de ${cliente.clt_nome.split(' ')[0]}</h2>
        <p><strong>Nome Completo: </strong>${cliente.clt_nome}</p>
        <p><strong>CPF: </strong>${cliente.clt_cpf}</p>
        <p><strong>Data Nascimento: </strong>${cliente.clt_data_nasc}</p>
    `;


    this.appendChild(popup);

    // Evento para fechar o popup ao clicar no botão "X"
    popup.querySelector('.button-popup').addEventListener('click', () => {
        popup.remove();
    });

});


//Removendo o submenu ao clicar fora da tela
document.addEventListener('click', (event) => {
    const popup = document.querySelector('.popup');
    
    if (popup && !popup.contains(event.target)) {
        popup.remove();
    }
});





