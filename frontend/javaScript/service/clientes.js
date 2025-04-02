document.addEventListener('DOMContentLoaded', () => {
    fetchClientes();
});

async function fetchClientes() {
    try {
        const response = await fetch('http://localhost:8080/clientes'); 
        const clientes = await response.json();

        //Obtendo o container
        const container = document.querySelector('.container-index')

        clientes.forEach(cliente => {
            const clienteDiv = document.createElement('div');

            clienteDiv.classList.add('wrapper');
            clienteDiv.innerHTML = `
                <div class="cliente">
                    <p class="invisible cliente-id">${cliente.clt_id}</p>
                    <p>${cliente.clt_nome}</p>
                    <p>${cliente.clt_data_nasc}</p>
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
